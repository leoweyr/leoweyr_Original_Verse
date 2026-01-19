import { type MotionProps, type LegacyAnimationControls, useAnimationControls, usePresence, motion } from "framer-motion";
import { type ComponentType, forwardRef, useContext, type MutableRefObject, useRef, useEffect } from "react";

import { type AnimationControlContextType, AnimationControlContext } from "./AnimationControlContext";
import { DeepComparator } from "../../utils/DeepComparator";


const withControllableMotion = <P extends MotionProps>(
    WrappedComponent: ComponentType<P>
) => {
    const WithControllableMotionComponent = forwardRef<any, MotionProps>((props: MotionProps, ref) => {
        // Controls animation pause/resume via context state management.
        const context: AnimationControlContextType = useContext(AnimationControlContext);
        const lastPausedState: MutableRefObject<boolean> = useRef<boolean>(context?.isPaused ?? false);
        const controls: LegacyAnimationControls = useAnimationControls();
        const [ isPresent, safeToRemove ] = usePresence();

        // Tracks animation progress timestamp.
        const lastControlTimestampRef: MutableRefObject<number> = useRef<number>(0);

        // Parses durations for each animation phase from props.
        const initialToAnimateDurationRef: MutableRefObject<number> = useRef<number>(0);
        const animateToExitDurationRef: MutableRefObject<number> = useRef<number>(0);

        const { children, ...restProps } = props;
        const otherRestPropsRef: MutableRefObject<Record<string, any>> = useRef<Record<string, any>>({});
        const initialToAnimateTargetRef: MutableRefObject<Record<string, any>> = useRef<Record<string, any>>({});
        const animateToExitTargetRef: MutableRefObject<Record<string, any>> = useRef<Record<string, any>>({});

        const parseAnimationPhasesDuration: () => void = (): void => {
            if (restProps && typeof restProps === 'object') {
                otherRestPropsRef.current = { ...restProps };

                for (const key in restProps as Record<string, any>) {
                    const value: any = (restProps as Record<string, any>)[key];

                    switch (key) {
                        case 'animate':
                            initialToAnimateTargetRef.current = {};

                            for (const animateOptionKey in value as Record<string, any>) {
                                if (animateOptionKey === 'transition') {
                                    initialToAnimateDurationRef
                                        .current = (value as Record<string, any>)[animateOptionKey].duration ?? 0;
                                } else {
                                    initialToAnimateTargetRef.current[animateOptionKey] = value[animateOptionKey];
                                }
                            }

                            delete otherRestPropsRef.current[key];

                            break;
                        case 'exit':
                            animateToExitTargetRef.current = {};

                            for (const exitOptionKey in value as Record<string, any>) {
                                if (exitOptionKey === 'transition') {
                                    animateToExitDurationRef
                                        .current = (value as Record<string, any>)[exitOptionKey].duration ?? 0;
                                } else {
                                    animateToExitTargetRef.current[exitOptionKey] = value[exitOptionKey];
                                }
                            }

                            delete otherRestPropsRef.current[key];

                            break;
                        case 'transition':
                            if (value.duration) {
                                initialToAnimateDurationRef.current = value.duration;
                                animateToExitDurationRef.current = value.duration;
                            }

                            delete otherRestPropsRef.current[key]["duration"];

                            break;
                    }
                }
            }
        };

        // Monitors prop changes to determine if animation targets have changed.
        const lastPropsWithoutChildrenRef: MutableRefObject<MotionProps> = useRef<MotionProps>({...restProps});

        useEffect((): void => {
            if (!DeepComparator.isEqual(lastPropsWithoutChildrenRef.current, {...restProps})) {
                parseAnimationPhasesDuration();
                lastControlTimestampRef.current = Date.now();
                controls.start(initialToAnimateTargetRef.current, { duration:  initialToAnimateDurationRef.current});

                lastPropsWithoutChildrenRef.current = props;
            }
        }, [props]);

        // Logic for the initial render.
        const wasMountedRef: MutableRefObject<boolean> = useRef<boolean>(false);

        if (!wasMountedRef.current) {
            parseAnimationPhasesDuration();
        }

        // Execution after component mounting.
        useEffect((): void => {
            lastControlTimestampRef.current = Date.now();
            controls.start(initialToAnimateTargetRef.current, { duration:  initialToAnimateDurationRef.current});
            wasMountedRef.current = true;
        }, []);

        // Listens for changes in the pause state from the context.
        useEffect((): void => {
            const currentPausedState: boolean = context?.isPaused ?? false;

            if (currentPausedState !== lastPausedState.current) {
                if (currentPausedState === true) {
                    let transitionElapsedSeconds: number;

                    if (lastControlTimestampRef.current === 0) {
                        transitionElapsedSeconds = 0;
                    } else {
                        transitionElapsedSeconds = (Date.now() - lastControlTimestampRef.current) / 1000;
                    }

                    if (isPresent) {
                        initialToAnimateDurationRef.current -= transitionElapsedSeconds;
                    } else {
                        animateToExitDurationRef.current -= transitionElapsedSeconds;
                    }

                    controls.stop();
                } else {
                    lastControlTimestampRef.current = Date.now();

                    if (isPresent) {
                        controls
                            .start(initialToAnimateTargetRef.current, { duration:  initialToAnimateDurationRef.current});
                    } else {
                        controls
                            .start(animateToExitTargetRef.current, { duration:  animateToExitDurationRef.current})
                            .then(safeToRemove);
                    }
                }

                lastPausedState.current = currentPausedState;
            }
        }, [context?.isPaused]);

        // Triggers the animation to the exit phase.
        useEffect((): void => {
            if (!isPresent) {
                if (!(context?.isPaused ?? false)) {
                    lastControlTimestampRef.current = Date.now();

                    controls.start(animateToExitTargetRef.current, { duration:  animateToExitDurationRef.current}).then(safeToRemove);
                }
            }
        }, [isPresent]);

        return (
                <WrappedComponent
                    ref={ref}
                    {...otherRestPropsRef.current as P}
                    animate={controls}
                >
                    {children}
                </WrappedComponent>
        );
    });

    WithControllableMotionComponent.displayName = `WithControllableMotion(${WrappedComponent.displayName || WrappedComponent.name})`;

    return WithControllableMotionComponent;
};


export const ControllableMotionDiv = withControllableMotion(motion.div);

import { type MotionProps, motion } from "framer-motion";
import { type ComponentType, forwardRef, useContext } from "react";

import { type AnimationControlContextType, AnimationControlContext } from "./AnimationControlContext";


const withControllableMotion = <P extends MotionProps>(
    WrappedComponent: ComponentType<P>
) => {
    const WithControllableMotionComponent = forwardRef<any, MotionProps>((props, ref) => {
        const { animate, children, ...restProps } = props;
        const context: AnimationControlContextType = useContext(AnimationControlContext);
        const isPaused: boolean = context?.isPaused ?? false;

        return (
            <WrappedComponent
                ref={ref}
                {...restProps as P}
                animate={isPaused ? false : animate}
            >
                {children}
            </WrappedComponent>
        );
    });

    WithControllableMotionComponent.displayName = `WithControllableMotion(${WrappedComponent.displayName || WrappedComponent.name})`;

    return WithControllableMotionComponent;
};


export const ControllableMotionDiv = withControllableMotion(motion.div);

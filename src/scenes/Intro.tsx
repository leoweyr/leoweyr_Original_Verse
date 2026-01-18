import { Component, type Context, type ReactNode } from "react";

import { AnimationControlContext, type AnimationControlContextType } from "../hocs/controllable-motion/AnimationControlContext";
import { Observer } from "../features/observer-perspective/Observer";
import { ControllableMotionDiv } from "../hocs/controllable-motion/WithControllableMotionComponent";
import OriginalMask from "../components/backgrounds/OriginalMask";
import CenterTitle from "../components/CenterTitle";
import Love from "../components/Love";
import CenterSubtitle from "../components/CenterSubtitle";


interface IntroProps {
    onCompleted?: () => void;
}


interface IntroState {
    phase: number;
}


class Intro extends Component<IntroProps, IntroState> {
    static contextType: Context<AnimationControlContextType> = AnimationControlContext;

    declare context: AnimationControlContextType;

    private loveAnimationTimer: number | null = null;
    private loveAnimationRemainingTime: number = 2800;
    private loveAnimationLastControlTimestamp: number = 0;

    constructor(props: IntroProps) {
        super(props);

        this.state = {
            phase: 1,
        };
    }

    public render(): ReactNode {
        const observer: Observer = Observer.getInstance();

        return (
            <div>
                <ControllableMotionDiv
                    initial={{opacity: 0}}
                    animate={this.state.phase === 1 ? {opacity: 0.2} : {opacity: 0.5}}
                    transition={this.state.phase === 1 ? {duration: 2} : {duration: 2}}
                >
                    <OriginalMask opacity={1} />
                </ControllableMotionDiv>

                <ControllableMotionDiv
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2.8}}
                >
                    <CenterTitle
                        text={observer.synesthetize("welcome")}
                        color={this.state.phase === 1 ? "#C4C4C4" : "#F3F3F3"}
                    />
                </ControllableMotionDiv>

                <ControllableMotionDiv
                    initial={{opacity: 0}}
                    animate={this.state.phase === 1 ? {opacity: 1} : {opacity: 0}}
                    transition={this.state.phase === 1 ? {duration: 3.6} : {duration: 2.8}}
                >
                    <div onClick={(): void => this.setState({phase: 2})}>
                        <Love />
                    </div>
                </ControllableMotionDiv>

                {this.state.phase === 2 && (
                    <ControllableMotionDiv
                        initial={{opacity: 0, y: '-7.714843vh'}}
                        animate={{opacity: 1, y: '0'}}
                        transition={{duration: 2.8}}
                    >
                        <CenterSubtitle text={observer.synesthetize("design-slogan")} />
                    </ControllableMotionDiv>
                )}
            </div>
        );
    }

    public componentDidUpdate(_prevProps: Readonly<IntroProps>, prevState: Readonly<IntroState>, _snapshot?: any): void {
        const { isPaused } = this.context;

        const handleLoveAnimationCompleted: () => void = (): void => {
            if (!isPaused) {
                if (this.props.onCompleted) {
                    this.props.onCompleted();
                }
            }
        };

        // Animation pause.
        if (isPaused && this.loveAnimationTimer) {
            clearTimeout(this.loveAnimationTimer);
            this.loveAnimationTimer = null;
            this.loveAnimationRemainingTime -= (Date.now() - this.loveAnimationLastControlTimestamp);
        }

        // Animation resume.
        if (!isPaused && this.loveAnimationLastControlTimestamp !== 0) {
            this.loveAnimationLastControlTimestamp = Date.now();
            this.loveAnimationTimer = setTimeout(handleLoveAnimationCompleted, this.loveAnimationRemainingTime);
        }

        // Initial trigger.
        if (prevState.phase !== 2 && this.state.phase === 2 && this.loveAnimationLastControlTimestamp === 0) {
            this.loveAnimationLastControlTimestamp = Date.now();
            this.loveAnimationTimer = setTimeout(handleLoveAnimationCompleted, this.loveAnimationRemainingTime);
        }
    }

    public componentWillUnmount(): void {
        if (this.loveAnimationTimer) {
            clearTimeout(this.loveAnimationTimer);
        }
    }
}


export default Intro;

import { Component, type ReactNode } from "react";

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
    loveAnimationStarted: boolean;
}


class Intro extends Component<IntroProps, IntroState> {
    private loveAnimationTimer: number | null = null;

    constructor(props: IntroProps) {
        super(props);

        this.state = {
            phase: 1,
            loveAnimationStarted: false
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
        if (prevState.phase !== 2 && this.state.phase === 2 && !this.state.loveAnimationStarted) {
            this.loveAnimationTimer = setTimeout((): void => {
                this.setState({loveAnimationStarted: true});

                if (this.props.onCompleted) {
                    this.props.onCompleted();
                }
            }, 2800);
        }
    }

    public componentWillUnmount(): void {
        if (this.loveAnimationTimer) {
            clearTimeout(this.loveAnimationTimer);
        }
    }
}


export default Intro;

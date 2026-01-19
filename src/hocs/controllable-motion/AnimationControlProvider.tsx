import { type ReactNode, Component } from "react";

import { AnimationControlContext } from "./AnimationControlContext";


interface AnimationControlProviderProps {
    children?: ReactNode;
    [key: string]: any;
}


interface AnimationControlProviderState {
    isPaused: boolean;
}


class AnimationControlProvider extends Component<AnimationControlProviderProps, AnimationControlProviderState> {
    private readonly togglePause: () => void;
    private readonly pauseAnimation: () => void;
    private readonly resumeAnimation: () => void;

    constructor(props: AnimationControlProviderProps) {
        super(props);

        this.state = {
            isPaused: false
        };

        this.togglePause = (): void => {
            this.setState((prevState: Readonly<AnimationControlProviderState>): AnimationControlProviderState  => ({
                isPaused: !prevState.isPaused
            }));
        };

        this.pauseAnimation = (): void => {
            this.setState({
                isPaused: true
            });
        };

        this.resumeAnimation = (): void => {
            this.setState({
                isPaused: false
            });
        };
    }

    public render(): ReactNode {
        const { children, ...restProps } = this.props;
        const { isPaused } = this.state;

        return (
            <AnimationControlContext.Provider
                value={{
                    isPaused,
                    togglePause: this.togglePause,
                    pauseAnimation: this.pauseAnimation,
                    resumeAnimation: this.resumeAnimation
                }}
            >
                <div {...restProps}>
                    {children}
                </div>
            </AnimationControlContext.Provider>
        );
    }
}


export default AnimationControlProvider;

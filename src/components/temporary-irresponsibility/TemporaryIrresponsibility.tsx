import { Component, type ReactNode, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { RotateStage } from "./enums/RotateStage";
import RotatePromptAnimation from "./animations/RotatePromptAnimation";
import RotationCompleteAnimation from "./animations/RotationCompleteAnimation";


interface TemporaryIrresponsibilityState {
    isPortraitNarrow: boolean;
    rotateStage: RotateStage;
}


class TemporaryIrresponsibility extends Component<{}, TemporaryIrresponsibilityState> {
    private readonly handlerOrientationChange: () => void = (): void => {
        this.setState({ isPortraitNarrow: this.isPortraitNarrowScreen() });
    };
    private rotationCompleteAnimationTimer: number | null = null;

    constructor(props: {}) {
        super(props);

        this.state = {
            isPortraitNarrow: this.isPortraitNarrowScreen(),
            rotateStage: RotateStage.NOT_NEED
        };
    }

    private isPortraitNarrowScreen(): boolean {
        if (typeof window === "undefined") return false;

        if (window.screen?.orientation?.type) {
            return window.screen.orientation.type.includes("portrait");
        } else {
            const mediaQuery: MediaQueryList = window.matchMedia("(orientation: portrait)");

            return mediaQuery.matches || window.innerWidth < window.innerHeight;
        }
    }

    public render(): ReactNode {
        const overlayStyle: CSSProperties = {
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 11,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(17, 24, 39, 0.6)',
            backdropFilter: 'blur(24px)',
            userSelect: 'none',
            touchAction: 'none'
        }

        return (
            <AnimatePresence mode="wait">
                {(this.state.rotateStage !== RotateStage.NOT_NEED) && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={overlayStyle}
                    >
                        {this.state.rotateStage === RotateStage.PROMPTING && (
                            <RotatePromptAnimation key="prompting" />
                        )}
                        {this.state.rotateStage === RotateStage.COMPLETED && (
                            <RotationCompleteAnimation key="completed" />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }

    public componentDidMount(): void {
        this.setState({ isPortraitNarrow: this.isPortraitNarrowScreen() });

        window.addEventListener("resize", this.handlerOrientationChange);
        window.addEventListener("orientationchange", this.handlerOrientationChange);

        if (window.screen?.orientation) {
            window.screen.orientation.addEventListener("change", this.handlerOrientationChange);
        }

        const mediaQuery: MediaQueryList = window.matchMedia("(orientation: portrait)");
        mediaQuery.addEventListener("change", this.handlerOrientationChange);
    }

    public componentDidUpdate(
        _prevProps: Readonly<{}>,
        prevState: Readonly<TemporaryIrresponsibilityState>,
        _snapshot?: any
    ): void {
        if (
            !this.state.isPortraitNarrow &&
            this.state.rotateStage === RotateStage.PROMPTING &&
            prevState.rotateStage !== RotateStage.COMPLETED
        ) {
            this.setState({ rotateStage: RotateStage.COMPLETED });

            this.rotationCompleteAnimationTimer = setTimeout((): void => {
                this.setState({ rotateStage: RotateStage.NOT_NEED });
            }, 2000);
        } else if (
            this.state.isPortraitNarrow &&
            this.state.rotateStage === RotateStage.NOT_NEED &&
            prevState.rotateStage !== RotateStage.PROMPTING
        ) {
            this.setState({ rotateStage: RotateStage.PROMPTING });
        } else if (
            this.state.isPortraitNarrow &&
            this.state.rotateStage === RotateStage.COMPLETED &&
            prevState.rotateStage !== RotateStage.PROMPTING
        ) {
            this.setState({ rotateStage: RotateStage.PROMPTING });
        }
    }

    public componentWillUnmount(): void {
        window.removeEventListener("resize", this.handlerOrientationChange);
        window.removeEventListener("orientationchange", this.handlerOrientationChange);

        if (window.screen?.orientation) {
            window.screen.orientation.removeEventListener("change", this.handlerOrientationChange);
        }

        const mediaQuery: MediaQueryList = window.matchMedia("(orientation: portrait)");
        mediaQuery.removeEventListener("change", this.handlerOrientationChange);

        if (this.rotationCompleteAnimationTimer) {
            clearTimeout(this.rotationCompleteAnimationTimer);
        }
    }
}


export default TemporaryIrresponsibility;

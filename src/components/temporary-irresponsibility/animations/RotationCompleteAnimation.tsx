import { Component, type ReactNode } from "react";
import { motion } from "framer-motion";

import { Observer } from "../../../features/observer-perspective/Observer";
import PhonePromptFocus from "../PhonePromptFocus";


interface RotationCompleteAnimationState {
    phonePromptFocusSideLength: number;
}


class RotationCompleteAnimation extends Component<{}, RotationCompleteAnimationState> {
    private handleResizePhonePromptFocus: () => void = (): void => {
        const observer: Observer = Observer.getInstance();
        this.setState({
            phonePromptFocusSideLength: observer.getFieldOfView(0.348837).height
        });
    };

    constructor(props: {}) {
        super(props);
        
        const observer: Observer = Observer.getInstance();
        this.state = {
            phonePromptFocusSideLength: observer.getFieldOfView(0.348837).height
        };
    }

    public render(): ReactNode {
        return (
            <PhonePromptFocus height={this.state.phonePromptFocusSideLength}>
                {/* Counterclockwise circular path animation. */}
                <motion.path
                    d="M 180 300
                       a 120 120 0 0 0 120 -120
                       a 120 120 0 0 0 -120 -120
                       a 120 120 0 0 0 -120 120
                       a 120 120 0 0 0 120 120"
                    stroke="white"
                    strokeWidth="9.375"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, rotate: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut"
                    }}
                />
                {/* Tick animation. */}
                <motion.path
                    d="M 120 180 L 180 240 L 240 120"
                    stroke="white"
                    strokeWidth="9.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0, scale: 0.5 }}
                    animate={{ pathLength: 1, opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                />
            </PhonePromptFocus>
        );
    }

    public componentDidMount(): void {
        window.addEventListener('resize', this.handleResizePhonePromptFocus);
        window.addEventListener('orientationchange', this.handleResizePhonePromptFocus);
    }

    public componentWillUnmount(): void {
        window.removeEventListener('resize', this.handleResizePhonePromptFocus);
        window.removeEventListener('orientationchange', this.handleResizePhonePromptFocus);
    }
}


export default RotationCompleteAnimation;

import { Component, type ReactNode } from "react";
import { type Variant, type Transition, motion } from "framer-motion";

import { Observer } from "../../../features/observer-perspective/Observer";
import PhonePromptFocus from "../PhonePromptFocus";
import PhoneModel from "../PhoneModel";


class RotatePromptAnimation extends Component {
    public render(): ReactNode {
        const observer: Observer = Observer.getInstance();

        const phoneModelAnchor: Variant = {
            x: 180,
            y: 60
        }

        const basicAnimationTransition: Transition = {
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.5
        }

        const phoneModelAnimationTransition: Transition = {
            ...basicAnimationTransition,
            times: [0, 0.1, 0.4, 0.9, 1]
        }

        const arrowAnimationTransition: Transition = {
            ...basicAnimationTransition,
            times: [0, 0.4, 0.55, 0.65, 0.9, 1]
        }

        return (
            <PhonePromptFocus width={observer.getFieldOfView(0.348837).width}>
                {/* Static phone model animation. */}
                <motion.g
                    initial={phoneModelAnchor}
                    animate={{
                        opacity: [1, 1, 0.3, 0.3, 0.3]
                    }}
                    transition={phoneModelAnimationTransition}
                >
                    <PhoneModel />
                </motion.g>
                {/* Rotating phone model animation. */}
                <motion.g
                    initial={{
                        ...phoneModelAnchor,
                        originX: '60px',
                        originY: '180px'
                    }}
                    animate={{
                        rotate: [0, 0, -90, -90, -90]
                    }}
                    transition={phoneModelAnimationTransition}
                >
                    <PhoneModel />
                </motion.g>
                {/* Arrow path animation. */}
                <motion.path
                    d="M 150 60 A 90 90 0 0 0 60 150"
                    stroke="currentColor"
                    strokeWidth="9.375"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 0, 0, 1, 1, 1],
                        opacity: [0, 0, 0, 1, 1, 1]
                    }}
                    transition={arrowAnimationTransition}
                />
                {/* Arrowhead animation. */}
                <motion.path
                    d="M 60 150 L 45 135 M 60 150 L 75 135"
                    stroke="currentColor"
                    strokeWidth="9.375"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{
                        pathLength: [0, 0, 0, 0, 1, 1],
                        opacity: [0, 0, 0, 0, 1, 1]
                    }}
                    transition={arrowAnimationTransition}
                />
            </PhonePromptFocus>
        );
    }
}


export default RotatePromptAnimation;

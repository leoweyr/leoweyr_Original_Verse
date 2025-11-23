import { Component, type ReactNode } from "react";
import { motion } from "framer-motion";

import { Observer } from "../features/observer-perspective/Observer";
import OriginalMask from "../components/backgrounds/OriginalMask";
import CenterTitle from "../components/CenterTitle";
import Love from "../components/Love";
import CenterSubtitle from "../components/CenterSubtitle";


interface IntroState {
    phase: number;
}


class Intro extends Component<{}, IntroState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            phase: 1
        };
    }

    public render(): ReactNode {
        const observer: Observer = Observer.getInstance();

        return (
            <div>
                <motion.div
                    initial={{opacity: 0}}
                    animate={this.state.phase === 1 ? {opacity: 0.2} : {opacity: 0.5}}
                    transition={this.state.phase === 1 ? {duration: 2} : {duration: 2}}
                >
                    <OriginalMask opacity={1} />
                </motion.div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 2.8}}
                >
                    <CenterTitle
                        text={observer.synesthetize("welcome")}
                        color={this.state.phase === 1 ? "#C4C4C4" : "#F3F3F3"}
                    />
                </motion.div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={this.state.phase === 1 ? {opacity: 1} : {opacity: 0}}
                    transition={this.state.phase === 1 ? {duration: 3.6} : {duration: 2.8}}
                    onClick={(): void => this.setState({phase: 2})}
                >
                    <Love />
                </motion.div>

                {this.state.phase === 2 && (
                    <motion.div
                        initial={{opacity: 0, y: '-7.714843vh'}}
                        animate={{opacity: 1, y: '0'}}
                        transition={{duration: 2.8}}
                    >
                        <CenterSubtitle text={observer.synesthetize("design-slogan")} />
                    </motion.div>
                )}
            </div>
        );
    }
}


export default Intro;

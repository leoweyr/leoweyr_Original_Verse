import { Component, type ReactNode } from "react";
import { AnimatePresence } from "framer-motion";

import { Scene } from "./scenes/enums/Scene"
import { Observer } from "./features/observer-perspective/Observer";
import AnimationControlProvider from "./hocs/controllable-motion/AnimationControlProvider";
import { ControllableMotionDiv } from "./hocs/controllable-motion/WithControllableMotionComponent";
import Intro from "./scenes/Intro";
import MainStage from "./scenes/MainStage";
import TemporaryIrresponsibility from "./components/temporary-irresponsibility/TemporaryIrresponsibility";


interface AppState {
    currentScene: Scene;
}


class App extends Component<{}, AppState> {
    private readonly onIntroComplete: () => void = (): void => {
        setTimeout(() => {
            this.setState({currentScene: Scene.MAIN_STAGE});
        }, 800);
    };

    constructor(props: {}) {
        super(props);

        this.state = {
            currentScene: Scene.INTRO
        };

        const observer: Observer = Observer.getInstance();

        document.title = observer.synesthetize("welcome");

        const metaDescription: Element | null = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                observer.synesthetize("meta.description")
            );
        }

        const linkIcon: Element | null = document.querySelector("link[rel='icon']");

        if (linkIcon) {
            linkIcon.setAttribute("href", observer.getPerspectiveIconImageSource());
        }
    }

    public render(): ReactNode {
        return (
            <AnimationControlProvider>
                <AnimatePresence>
                    {this.state.currentScene === Scene.INTRO ? (
                        <ControllableMotionDiv
                            key="intro"
                            exit={{ opacity: 0 }}
                            transition={{duration: 2}}
                        >
                            <Intro onCompleted={this.onIntroComplete} />
                        </ControllableMotionDiv>
                    ) : (
                        <ControllableMotionDiv
                            key="main-stage"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2}}
                        >
                            <MainStage />
                        </ControllableMotionDiv>
                    )}
                </AnimatePresence>
                <TemporaryIrresponsibility />
            </AnimationControlProvider>
        );
    }
}


export default App;

import { Component, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Scene } from "./scenes/enums/Scene"
import { Observer } from "./features/observer-perspective/Observer";
import Intro from "./scenes/Intro";
import MainStage from "./scenes/MainStage";


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

        if(linkIcon) {
            linkIcon.remove();
        }

        const link: HTMLLinkElement = document.createElement('link');
        const timestamp: number = new Date().getTime();

        link.rel = 'icon';
        link.href = `${observer.getPerspectiveIconImageSource()}?t=${timestamp}`;

        document.head.appendChild(link);
    }

    public render(): ReactNode {
        return (
            <div>
                <AnimatePresence>
                    {this.state.currentScene === Scene.INTRO ? (
                        <motion.div
                            key="intro"
                            exit={{ opacity: 0 }}
                            transition={{duration: 2}}
                        >
                            <Intro onCompleted={this.onIntroComplete} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="main-stage"
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 2}}
                        >
                            <MainStage />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    }
}


export default App;

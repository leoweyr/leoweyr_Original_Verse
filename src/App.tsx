import { Component, type ReactNode } from "react";

import { Observer } from "./features/observer-perspective/Observer";
import Spotlight from "./components/spotlight/Spotlight.tsx";
import OriginalBackground from "./components/backgrounds/OriginalBackground";
import CosmicBackground from "./components/backgrounds/cosmic-background/CosmicBackground";
import MusicBox from "./components/MusicBox.tsx";


class App extends Component {
    constructor(props: {}) {
        super(props);

        const observer: Observer = Observer.getInstance();

        document.title = observer.synesthetize("welcome");

        const metaDescription: Element | null = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                observer.synesthetize("meta.description")
            );
        }


    }

    public render(): ReactNode {
        const backgrounds: Array<typeof OriginalBackground> = [OriginalBackground, CosmicBackground];
        const RandomBackground: (typeof OriginalBackground) = backgrounds[Math.floor(Math.random() * backgrounds.length)];

        return (
            <div>
                <Spotlight />
                <RandomBackground />
                <MusicBox />
            </div>
        );
    }
}


export default App;

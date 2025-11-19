import { Component, type ReactNode } from "react";

import { Observer } from "./features/observer-perspective/Observer";
import OriginalBackground from "./components/backgrounds/OriginalBackground";
import CosmicBackground from "./components/backgrounds/cosmic-background/CosmicBackground";
import Impression from "./components/Impression.tsx";
import PerfectIntegrationImage from "./assets/expression/perfect-integration.png";
import WangMiaoCatImage from "./assets/expression/wang-miao-cat.png";
import TheEnigmaticDaisyImage from "./assets/expression/the-enigmatic-daisy.png";
// Treasured: import DeeponlyTaImage from "./assets/expression/deeponly-ta.png"
import AGamerZeldaImage from "./assets/expression/a-gamer-zelda.png";
import SpheriticistImage from "./assets/expression/spheriticist.png";
import NotionianImage from "./assets/expression/notionian.png";
import NintendoIsTheFuckinRulerOfTheWorld from "./assets/expression/nintendo-is-the-fuckin-ruler-of-the-world.png";
import Expression from "./components/Expression.tsx";
import MusicBox from "./components/MusicBox.tsx";


class App extends Component {
    private readonly observer: Observer;
    private readonly favicons: Array<string>;

    constructor(props: {}) {
        super(props);

        this.observer = Observer.getInstance();

        this.favicons = [
            PerfectIntegrationImage,
            WangMiaoCatImage,
            TheEnigmaticDaisyImage,
            // Treasured: DeeponlyTaImage
            AGamerZeldaImage,
            SpheriticistImage,
            NotionianImage,
            NintendoIsTheFuckinRulerOfTheWorld
        ];

        document.title = this.observer.synesthetize("welcome");

        const metaDescription: Element | null = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                this.observer.synesthetize("meta.description")
            );
        }

        const linkIcon: Element | null = document.querySelector("link[rel='icon']");

        if (linkIcon) {
            linkIcon.setAttribute("href", this.favicons[Math.floor(Math.random() * this.favicons.length)]);
        }
    }

    public render(): ReactNode {
        const backgrounds: Array<typeof OriginalBackground> = [OriginalBackground, CosmicBackground];
        const impressions: Array<string> = this.favicons;
        const expressions: Array<string> = [
            this.observer.synesthetize("leoweyr"),
            this.observer.synesthetize("slice.perfect-integration"),
            this.observer.synesthetize("slice.wang-miao-cat"),
            this.observer.synesthetize("slice.the-enigmatic-daisy"),
            // Treasured: this.observer.synesthetize("slice.deeponly-ta")
            this.observer.synesthetize("slice.a-gamer-zelda"),
            this.observer.synesthetize("slice.spheriticist"),
            this.observer.synesthetize("slice.notionian"),
            this.observer.synesthetize("slice.nintendo-is-the-fuckin-ruler-of-the-world")
        ];

        const RandomBackground: (typeof OriginalBackground) = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        const randomImpression: string = impressions[Math.floor(Math.random() * impressions.length)];
        const randomExpression: string = expressions[Math.floor(Math.random() * expressions.length)];

        return (
            <div>
                <RandomBackground />
                <Impression imageSource={randomImpression}/>
                <Expression sign={randomExpression} />
                <MusicBox />
            </div>
        );
    }
}


export default App;

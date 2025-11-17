import { Component, type ReactNode } from "react";

import OriginalBackground from "./components/backgrounds/OriginalBackground";
import CosmicBackground from "./components/backgrounds/cosmic-background/CosmicBackground";
import Impression from "./components/Impression.tsx";
import PerfectIntegrationImage from "./assets/expression/perfect-integration.png";
import WangMiaoCatImage from "./assets/expression/wang-miao-cat.png";
import TheEnigmaticDaisyImage from "./assets/expression/the-enigmatic-daisy.png";
import DeeponlyTaImage from "./assets/expression/deeponly-ta.png";
import AGamerZeldaImage from "./assets/expression/a-gamer-zelda.png";
import SpheriticistImage from "./assets/expression/spheriticist.png";
import NotionianImage from "./assets/expression/notionian.png";
import NintendoIsTheFuckinRulerOfTheWorld from "./assets/expression/nintendo-is-the-fuckin-ruler-of-the-world.png";
import Expression from "./components/Expression.tsx";


class App extends Component {
    private readonly titles: Array<string>;
    private readonly descriptions: Array<string>;
    private readonly favicons: Array<string>;

    constructor(props: {}) {
        super(props);

        this.titles = [
            "Welcome to Leoweyr Original Verse",
            "欢迎来到炜翼的宇宙"
        ];

        this.descriptions = [
            "A personal website independently designed and developed by leoweyr.",
            "完全由炜翼独立自主设计和制作的个人网站。"
        ];

        this.favicons = [
            PerfectIntegrationImage,
            WangMiaoCatImage,
            TheEnigmaticDaisyImage,
            DeeponlyTaImage,
            AGamerZeldaImage,
            SpheriticistImage,
            NotionianImage,
            NintendoIsTheFuckinRulerOfTheWorld
        ];

        document.title = this.titles[Math.floor(Math.random() * this.titles.length)];

        const metaDescription: Element | null = document.querySelector('meta[name="description"]');

        if (metaDescription) {
            metaDescription.setAttribute(
                "content",
                this.descriptions[Math.floor(Math.random() * this.descriptions.length)]
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
            "炜翼",
            "leoweyr",
            "Perfect Integration",
            "Wang Miao Cat",
            "The Enigmatic Daisy",
            "Deeponly Ta",
            "A Gamer Zelda",
            "Spheriticist",
            "Notionian",
            "NINTENDO IS THE FUCKIN RULER OF THE WORLD!!!"
        ];

        const RandomBackground: (typeof OriginalBackground) = backgrounds[Math.floor(Math.random() * backgrounds.length)];
        const randomImpression: string = impressions[Math.floor(Math.random() * impressions.length)];
        const randomExpression: string = expressions[Math.floor(Math.random() * expressions.length)];

        return (
            <div>
                <RandomBackground />
                <Impression imageSource={randomImpression}/>
                <Expression sign={randomExpression} />
            </div>
        );
    }
}


export default App;

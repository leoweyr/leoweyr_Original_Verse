import { Component, type ReactNode } from "react";

import Background from "./components/Background.tsx";
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
    render(): ReactNode {
        const impressions: Array<string> = [
            PerfectIntegrationImage,
            WangMiaoCatImage,
            TheEnigmaticDaisyImage,
            DeeponlyTaImage,
            AGamerZeldaImage,
            SpheriticistImage,
            NotionianImage,
            NintendoIsTheFuckinRulerOfTheWorld
        ];
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

        const randomImpression: string = impressions[Math.floor(Math.random() * impressions.length)];
        const randomExpression: string = expressions[Math.floor(Math.random() * expressions.length)];

        return (
            <div>
                <Background />
                <Impression imageSource={randomImpression}/>
                <Expression sign={randomExpression} />
            </div>
        );
    }
}


export default App;

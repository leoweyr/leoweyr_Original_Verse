import { Component, type ReactNode, type ReactElement } from "react";

import OriginalMask from "../components/backgrounds/OriginalMask";
import CosmicBackground from "../components/backgrounds/cosmic-background/CosmicBackground";
import Spotlight from "../components/spotlight/Spotlight";
import MusicBox from "../components/MusicBox";


class MainStage extends Component {
    public render(): ReactNode {
        const backgrounds: (() => ReactElement)[] = [
            (): ReactElement => <OriginalMask opacity={0.2}/>,
            (): ReactElement => <CosmicBackground />
        ];
        const RandomBackground: (() => ReactElement) = backgrounds[Math.floor(Math.random() * backgrounds.length)];

        return (
            <div>
                <Spotlight />
                <RandomBackground />
                <MusicBox />
            </div>
        );
    }
}


export default MainStage;

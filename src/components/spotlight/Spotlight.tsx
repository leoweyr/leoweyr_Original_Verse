import { Component, type ReactNode } from "react";

import { Spectrum } from "./enums/Spectrum";
import PerfectIntegrationImage from "../../assets/expression/perfect-integration.png";
import WangMiaoCatImage from "../../assets/expression/wang-miao-cat.png";
import TheEnigmaticDaisyImage from "../../assets/expression/the-enigmatic-daisy.png";
import DeeponlyTaImage from "../../assets/expression/deeponly-ta.png"
import AGamerZeldaImage from "../../assets/expression/a-gamer-zelda.png";
import SpheriticistImage from "../../assets/expression/spheriticist.png";
import NotionianImage from "../../assets/expression/notionian.png";
import NintendoIsTheFuckinRulerOfTheWorld from "../../assets/expression/nintendo-is-the-fuckin-ruler-of-the-world.png";
import Impression from "./Impression";
import Expression from "./Expression";
import { Observer } from "../../features/observer-perspective/Observer";


class Spotlight extends Component {
    private readonly impression: string = "";
    private readonly expression: string = "";

    public constructor(props: {}) {
        super(props);

        const observer: Observer = Observer.getInstance();

        const spectrum: Array<Spectrum> = [
            Spectrum.PERFECT_INTEGRATION,
            Spectrum.WANG_MIAO_CAT,
            Spectrum.THE_ENIGMATIC_DAISY,
            // Treasured: Spectrum.DEEPONLY_TA
            Spectrum.A_GAMER_ZELDA,
            Spectrum.NOTIONIAN,
            Spectrum.SPHERITICIST,
            Spectrum.NINTENDO_IS_THE_FUCKIN_RULER_OF_THE_WORLD
        ];
        const monochromatic: Spectrum = spectrum[Math.floor(Math.random() * spectrum.length)];

        switch (monochromatic) {
            case Spectrum.PERFECT_INTEGRATION:
                this.impression = PerfectIntegrationImage;
                this.expression = observer.synesthetize("slice.perfect-integration");

                break;
            case Spectrum.WANG_MIAO_CAT:
                this.impression = WangMiaoCatImage;
                this.expression = observer.synesthetize("slice.wang-miao-cat");

                break;
            case Spectrum.THE_ENIGMATIC_DAISY:
                this.impression = TheEnigmaticDaisyImage;
                this.expression = observer.synesthetize("slice.the-enigmatic-daisy");

                break;
            case Spectrum.DEEPONLY_TA:
                this.impression = DeeponlyTaImage;
                this.expression = observer.synesthetize("slice.deeponly-ta");

                break;
            case Spectrum.A_GAMER_ZELDA:
                this.impression = AGamerZeldaImage;
                this.expression = observer.synesthetize("slice.a-gamer-zelda");

                break;
            case Spectrum.NOTIONIAN:
                this.impression = NotionianImage;
                this.expression = observer.synesthetize("slice.notionian");

                break;
            case Spectrum.SPHERITICIST:
                this.impression = SpheriticistImage;
                this.expression = observer.synesthetize("slice.spheriticist");

                break;
            case Spectrum.NINTENDO_IS_THE_FUCKIN_RULER_OF_THE_WORLD:
                this.impression = NintendoIsTheFuckinRulerOfTheWorld;
                this.expression = observer.synesthetize("slice.nintendo-is-the-fuckin-ruler-of-the-world");

                break;
        }

        const linkIcon: Element | null = document.querySelector("link[rel='icon']");

        if (linkIcon) {
            linkIcon.setAttribute("href", this.impression);
        }
    }

    public render(): ReactNode {
        return (
          <div>
              <Impression imageSource={this.impression} />
              <Expression sign={this.expression} />
          </div>
        );
    }
}


export default Spotlight;

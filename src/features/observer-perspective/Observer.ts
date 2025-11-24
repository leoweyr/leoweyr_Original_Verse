import { SynesthesiaBeacon } from "./i18n/SynesthesiaBeacon";
import { Perspective } from "./enums/Perspective";
import PerfectIntegrationImage from "../../assets/expression/perfect-integration.png";
import WangMiaoCatImage from "../../assets/expression/wang-miao-cat.png";
import TheEnigmaticDaisyImage from "../../assets/expression/the-enigmatic-daisy.png";
import DeeponlyTaImage from "../../assets/expression/deeponly-ta.png"
import AGamerZeldaImage from "../../assets/expression/a-gamer-zelda.png";
import SpheriticistImage from "../../assets/expression/spheriticist.png";
import NotionianImage from "../../assets/expression/notionian.png";
import NintendoIsTheFuckinRulerOfTheWorld from "../../assets/expression/nintendo-is-the-fuckin-ruler-of-the-world.png";


export class Observer {
    private static instance: Observer;

    public static getInstance(): Observer {
        if (!Observer.instance) {
            Observer.instance = new Observer();
        }

        return Observer.instance;
    }

    private readonly synesthesiaBeacon: SynesthesiaBeacon;
    private readonly perspective: Perspective;

    private constructor() {
        this.synesthesiaBeacon = SynesthesiaBeacon.initialize();

        const perspectives: Array<Perspective> = [
            Perspective.PERFECT_INTEGRATION,
            Perspective.WANG_MIAO_CAT,
            Perspective.THE_ENIGMATIC_DAISY,
            // Treasured: Perspective.DEEPONLY_TA
            Perspective.A_GAMER_ZELDA,
            Perspective.SPHERITICIST,
            Perspective.NOTIONIAN,
            Perspective.NINTENDO_IS_THE_FUCKIN_RULER_OF_THE_WORLD
        ]

        this.perspective = perspectives[Math.floor(Math.random() * perspectives.length)];
    }

    public synesthetize(symbol: string, options?: any): string {
        return this.synesthesiaBeacon.translate(symbol, options);
    }

    public getPerspective(): Perspective {
        return this.perspective;
    }

    public getPerspectiveIconImageSource(): string {
        switch (this.perspective) {
            case Perspective.WANG_MIAO_CAT:
                return WangMiaoCatImage;
            case Perspective.THE_ENIGMATIC_DAISY:
                return TheEnigmaticDaisyImage;
            case Perspective.DEEPONLY_TA:
                return DeeponlyTaImage;
            case Perspective.A_GAMER_ZELDA:
                return AGamerZeldaImage;
            case Perspective.SPHERITICIST:
                return SpheriticistImage;
            case Perspective.NOTIONIAN:
                return NotionianImage;
            case Perspective.NINTENDO_IS_THE_FUCKIN_RULER_OF_THE_WORLD:
                return NintendoIsTheFuckinRulerOfTheWorld;
            default:
                return PerfectIntegrationImage;
        }
    }

    public getPerspectiveName(): string {
        switch (this.perspective) {
            case Perspective.WANG_MIAO_CAT:
                return this.synesthetize("slice.wang-miao-cat");
            case Perspective.THE_ENIGMATIC_DAISY:
                return this.synesthetize("slice.the-enigmatic-daisy");
            case Perspective.DEEPONLY_TA:
                return this.synesthetize("slice.deeponly-ta");
            case Perspective.A_GAMER_ZELDA:
                return this.synesthetize("slice.a-gamer-zelda");
            case Perspective.SPHERITICIST:
                return this.synesthetize("slice.spheriticist");
            case Perspective.NOTIONIAN:
                return this.synesthetize("slice.notionian");
            case Perspective.NINTENDO_IS_THE_FUCKIN_RULER_OF_THE_WORLD:
                return this.synesthetize("slice.nintendo-is-the-fuckin-ruler-of-the-world");
            default:
                return this.synesthetize("slice.perfect-integration");
        }
    }
}

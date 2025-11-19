import { SynesthesiaBeacon } from "./i18n/SynesthesiaBeacon";


export class Observer {
    private static instance: Observer;

    public static getInstance(): Observer {
        if (!Observer.instance) {
            Observer.instance = new Observer();
        }

        return Observer.instance;
    }

    private readonly synesthesiaBeacon: SynesthesiaBeacon;

    private constructor() {
        this.synesthesiaBeacon = SynesthesiaBeacon.initialize();
    }

    public synesthetize(symbol: string, options?: any): string {
        return this.synesthesiaBeacon.translate(symbol, options);
    }
}

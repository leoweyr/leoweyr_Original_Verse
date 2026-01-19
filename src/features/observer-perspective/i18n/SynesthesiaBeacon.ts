import i18n from "i18next";

import { Language } from "./enums/Language";
import ChineseTranslations from "./locales/chinese.json";
import EnglishTranslations from "./locales/english.json";


// Semantic guidance provided by "Honkai: Star Rail".
export class SynesthesiaBeacon {
    private static instance: SynesthesiaBeacon;

    public static initialize(): SynesthesiaBeacon {
        if (!SynesthesiaBeacon.instance) {
            SynesthesiaBeacon.instance = new SynesthesiaBeacon();
        }

        return SynesthesiaBeacon.instance;
    }

    private constructor() {
        i18n.init({
            resources: {
                [Language.CHINESE] : { translation:  ChineseTranslations },
                [Language.ENGLISH] : { translation:  EnglishTranslations }
            },
            interpolation: {
                escapeValue: false
            }
        });

        if (navigator.language === Language.CHINESE) {
            i18n.changeLanguage(Language.CHINESE);
        } else {
            i18n.changeLanguage(Language.ENGLISH);
        }
    }

    public translate(symbol: string, options?: any): string {
        return i18n.t(symbol, options) as string;
    }
}

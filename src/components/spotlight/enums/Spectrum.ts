export const Spectrum = {
    PERFECT_INTEGRATION: 0,
    WANG_MIAO_CAT: 1,
    DEEPONLY_TA: 2,
    A_GAMER_ZELDA: 3,
    NOTIONIAN: 6,
    SPHERITICIST: 8,
    NINTENDO_IS_THE_FUCKIN_RULER_OF_THE_WORLD: 9,
    THE_ENIGMATIC_DAISY: 10
}


export type Spectrum = typeof Spectrum[keyof typeof Spectrum];

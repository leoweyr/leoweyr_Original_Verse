export const Scene = {
    INTRO: 0,
    MAIN_STAGE: 1
}


export type Scene = typeof Scene[keyof typeof Scene];

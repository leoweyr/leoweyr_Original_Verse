export const RotateStage = {
    NOT_NEED: 0,
    PROMPTING: 1,
    COMPLETED: 2
}


export type RotateStage = typeof RotateStage[keyof typeof RotateStage];

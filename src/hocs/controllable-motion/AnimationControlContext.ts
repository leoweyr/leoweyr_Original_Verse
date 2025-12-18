import { type Context, createContext } from "react";


export interface AnimationControlContextType {
    isPaused: boolean;
    togglePause: () => void;
    pauseAnimation: () => void;
    resumeAnimation: () => void;
}


export const AnimationControlContext: Context<AnimationControlContextType> = createContext<AnimationControlContextType>({
    isPaused: false,
    togglePause: (): void => {},
    pauseAnimation: (): void => {},
    resumeAnimation: (): void => {}
});

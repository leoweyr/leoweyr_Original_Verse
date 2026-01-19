export const Language = {
    CHINESE: "zh-CN",
    ENGLISH: "en-US"
}


export type Language = typeof Language[keyof typeof Language];

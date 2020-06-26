export interface StyleTheme {
    theme? : string,
}
export interface Style {
    [ theme : string ] : any
}
export type defualtStyle = Array<string>
export const getStyleCss =(defaultStyle:defualtStyle,styleTheme:Style) => (theme:StyleTheme) => {
    return ([...defaultStyle,...styleTheme[theme as keyof Style]])
}
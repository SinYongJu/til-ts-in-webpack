import { css } from 'styled-components';


interface Style {
    [key : string] : string,
} 
type styleTarget = string | number
const parseStyle = (style : styleTarget,initial: string) => {
    if(!style) return initial || 'auto'
    if(String(style).indexOf('%') > -1){
        return style
    }
    return style + 'px'
}
const setStyledWidth = (initial: string= "auto") => css`
    width : ${(props:Style) => parseStyle(props.width, initial)}
`
const setStyledHeight = (initial: string = "auto") => css`
    height : ${(props:Style) => parseStyle(props.height, initial)}
`
const setStyledMaxWidth = (initial: string = 'none') => css`
    max-width : ${(props:Style)=> parseStyle(props.maxWidth, initial)}
`
const setStyledMaxHeight = (initial: string = 'none') => css`
    max-height : ${(props:Style)=> parseStyle(props.maxHeight, initial)}
`
export default {
    setStyledWidth,
    setStyledHeight,
    setStyledMaxWidth,
    setStyledMaxHeight
}
import * as React from 'react';
import styled, { css } from 'styled-components';
import { getStyleCss, defualtStyle } from '../../util/styled';

export interface InputProps {
    id: string
    error: boolean
    placeHolder?: string
    name?: string
    type?: string
}
export const INPUT_THEME_MAPPER = {
    SMIPLE : 'simple',
    BORDER : 'border',
}
const DEFAULT_INPUT_STYLE = css`
    width:100%;
    height:100%;
    box-sizing: border-box;
`
const INPUT_THEME = {
    "simple" : css<InputProps>`
        border-bottom : 1px solid;
        border-color : ${props => props.error ? 'red' : '#555'}
    `,
    "border" : css<InputProps>`
        border:1px solid;
        border-color : ${props => props.error ? 'red' : '#eee'}
    `
}
const inputStyle = getStyleCss(DEFAULT_INPUT_STYLE as defualtStyle, INPUT_THEME)
const Input = styled.input<InputProps>`
    ${({theme})=> inputStyle(theme)}
`

export default Input;
import * as React from 'react';
import styled, {css} from 'styled-components';
import { StyleTheme , Style, getStyleCss, defualtStyle} from '../../util/styled';

export const BUTTON_THEME_MAPPER = {
    BLUE : 'blue',
    BALCK : 'black'
}
const DEFAULT_BUTTON_STYLE = css`
    width: 100%;
    fontSize: 1em;
    lineHeight: 2em;
    textTransform: uppercase;
`
const BUTTON_THEME:Style = {
    [BUTTON_THEME_MAPPER.BLUE] : css`
        border : 1px solid;
        border-color : blue;
        color : blue;
    `,
    [BUTTON_THEME_MAPPER.BALCK] : css`
        border: 1px solid;
        border-color: #000;
        color: #555;
    `,
}

const buttonStyle = getStyleCss(DEFAULT_BUTTON_STYLE as defualtStyle, BUTTON_THEME)
const Button = styled.button<StyleTheme>`
    ${({theme})=>buttonStyle(theme)}
};
`


export default Button;
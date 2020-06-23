import * as React from 'react';
import styled, { StyledComponent } from 'styled-components';

interface ButtonProps {
    theme? : string,
}



interface ButtonStyle {
    [ key : string ] : any
}
const DEFAULT_BUTTON_STYLE:ButtonStyle = {
    width:'100%',
    fontSize: '1em',
    lineHeight: '2em',
    textTransform: 'uppercase'
}
const BUTTON_THEME:ButtonStyle = {
    'blue' : {
        border: '1px solid',
        borderColor: 'blue',
        color: 'blue'
    },
    'black' : {
        border: '1px solid',
        borderColor: '#000',
        color: '#555'
    }
}

const getStyleCss =(theme:ButtonProps) => ({...DEFAULT_BUTTON_STYLE,...BUTTON_THEME[theme as keyof ButtonStyle]})
const Button = styled.button<ButtonProps>(({theme})=>getStyleCss(theme))


export default Button;
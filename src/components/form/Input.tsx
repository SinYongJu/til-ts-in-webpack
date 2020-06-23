import * as React from 'react';
import styled from 'styled-components';

export interface InputProps {
    id: string
    error: boolean
    // className?:string
    placeHolder?: string
    name?: string
    type?: string
}

const Input = styled.input<InputProps>`
    width:100%;
    height:100%;
    box-sizing: border-box;
    border:1px solid;
    border-color : ${props => props.error ? 'red' : '#eee'}
`

export default Input;
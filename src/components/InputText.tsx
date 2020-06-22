import * as React from 'react';
import styled from 'styled-components';

interface InputProps {
    id: string
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void
    error: boolean
    // className?:string
    placeHolder?: string
    name?: string
    type?: string
}

interface LabelProps{
    children ?: React.ReactChild,
    htmlFor : string,
}


interface TextInputProps{
    children ?: React.ReactChild,
    className ?: string,
    input : InputProps,
}


const InputContainer = styled.div<object>`
    ::after{
        clear:both;
        display:block;
        height:0;
        content:''
    }
`
const WrapInput = styled.div<any>`
    overflow:hidden;    
`
const Label = styled.label<LabelProps>`
    float:left;
`
const Input = styled.input<InputProps>`
    width:100%;
    box-sizing: border-box;
    border:1px solid;
    border-color : ${props => props.error ? 'red' : '#eee'}
`
const TextInput:React.FC<TextInputProps> = ({children, input, ...props}) => {
    return (
        <InputContainer {...props}>
            <Label htmlFor={input.id}>{children}</Label>
           <WrapInput className="wrap_input">
            <Input {...input}/>
           </WrapInput>
        </InputContainer>
    )
}

export default TextInput
import * as React from 'react';
import styled from 'styled-components';
import Input, { InputProps } from './form/Input';
import Label from './form/Label';

interface TextInputProps{
    children ?: React.ReactChild,
    className ?: string,
    input : InputProps,
}
const InputContainer = styled.div``
const WrapInput = styled.div`
    overflow:hidden;    
`
const TextInputLabel = styled(Label)`
    float:left;
`
const TextInputBox:React.FC<TextInputProps> = ({children, input, ...props}) => {
    return (
        <InputContainer {...props}>
            <TextInputLabel htmlFor={input.id}>{children}</TextInputLabel>
           <WrapInput className="wrap_input">
            <Input {...input}/>
           </WrapInput>
        </InputContainer>
    )
}

const TextInput = styled(TextInputBox)`
`

export default TextInput
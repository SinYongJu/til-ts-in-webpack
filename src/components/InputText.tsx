import * as React from 'react';
import styled from 'styled-components';
import Input, { InputProps } from './form/Input';
import Label from './form/Label';
import Wrapper from './wrapper/Wrapper';

interface TextInputProps{
    children ?: React.ReactChild,
    className ?: string,
    input : InputProps,
}

export const TEXT_INPUT_MAPPER = {
    SMIPLE : 'simple',
    BORDER : 'border',
}
const InputContainer = styled(Wrapper)``
const WrapInput = styled(Wrapper)`
    overflow:hidden;    
`
const TextInputLabel = styled(Label)`
    float:left;
`
const TextInput:React.FC<TextInputProps> = ({children, className, input, ...props}) => {
    return (
        <InputContainer className={className} {...props}>
           <TextInputLabel htmlFor={input.id}>{children}</TextInputLabel>
           <WrapInput className="wrap_input">
            <Input {...input}/>
           </WrapInput>
        </InputContainer>
    )
}

export default styled(TextInput)``
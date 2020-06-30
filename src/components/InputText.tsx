import * as React from 'react';
import styled from 'styled-components';
import Input, { InputProps } from './form/Input';
import Label from './form/Label';
import Wrapper from './wrapper/Wrapper';

interface TextInputProps extends InputProps{
    children ?: React.ReactChild
    className ?: string
    value : string
    [handler : string] : any
}

const InputContainer = styled(Wrapper)``
const WrapInput = styled(Wrapper)`
    overflow:hidden;    
`
const TextInputLabel = styled(Label)`
    float:left;
`
const TextInput:React.FC<TextInputProps> = ({children, className, ...props}) => {
    return (
        <InputContainer className={className}>
           <TextInputLabel htmlFor={props.id}>{children}</TextInputLabel>
           <WrapInput className="wrap_input">
            <Input {...props}/>
           </WrapInput>
        </InputContainer>
    )
}

export default styled(TextInput)``
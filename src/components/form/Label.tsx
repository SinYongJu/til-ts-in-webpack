import * as React from 'react';
import styled from 'styled-components';

export interface LabelProps{
    children ?: React.ReactChild,
    htmlFor : string,
}

const Label = styled.label<LabelProps>``

export default Label;
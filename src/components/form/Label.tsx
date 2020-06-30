import * as React from 'react';
import styled from 'styled-components';

export interface LabelProps{
    htmlFor : string,
}

const Label = styled.label<LabelProps>``

export default Label;
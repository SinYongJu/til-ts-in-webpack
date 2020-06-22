import * as React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    float:left;
    font-size: 1.5em;
    line-height: 1.5em;
    color: #555;
`

const HitoryBack:React.FC = () => {
    return (
        <HeaderContainer>
            <StyledLink to="/">go back</StyledLink>
        </HeaderContainer>
    );
};

export default HitoryBack;
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderContainer from "./HeaderContainer";



const Title = styled.h1`
    float:left;
    font-size: 1.5em;
    line-height: 1.5em;
    color: #555;
    text-transform: uppercase; 
   
`
const Nav = styled.nav`
    float:right;
`
const NavItem = styled.li`
    float: left;
    font-size: 1.5em;
    line-height: 1.5em;
    & + li {
        margin-left: 10px;
    }
`

interface HeaderProps {
    children ?: React.ReactChild,
}

const Header:React.FC<HeaderProps> = ({children,...props})=> {
    return (
        <HeaderContainer>
            <Title>styled component til</Title>
            <Nav>
                <NavItem><Link to="/">home</Link></NavItem>
                <NavItem><Link to="/login">login</Link></NavItem>
                <NavItem><Link to="/about">about</Link></NavItem>
            </Nav>
            {children}
        </HeaderContainer>
    );
}

export default Header;
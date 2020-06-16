import * as React from 'react';
import { Link } from 'react-router-dom';

const Header:React.FC = (props)=> {
    console.log(props)
    return (
        <header>
        header
        <h1>ts-test</h1>
        <nav>
            <li><Link to="/">home</Link></li>
            <li><Link to="/login">login</Link></li>
            <li><Link to="/about">about</Link></li>
        </nav>
    </header>
    );
}

export default Header;
import React from 'react';
import c from './Header.module.scss'

const Header = () => {
    return (
        <header className={c.header}>
            <h1>cmd + opt + c - консоль JS</h1>
        </header>
    );
}

export default Header;

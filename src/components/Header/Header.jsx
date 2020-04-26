import React from 'react';
import c from './Header.module.scss'
const Header = () =>
{
    return (
        <header className = {c.header}>
        <img src='https://s2.logaster.com/static/v3/img/products/logo.png' ></img>
      </header>
    );
}

export default Header;

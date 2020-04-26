import React from 'react';
import css from './Sidebar.module.scss'
const Sidebar = () =>
{
    return (
      <nav className = {css.nav}>
      <div>
        <a href="">Profile</a>
      </div>
      <div>
        <a href="">Messages</a>
      </div>
      <div>
        <a href="">News</a>
      </div>
      <div>
        <a href="">Music</a>
      </div><br></br>
      <div>
        <a href="">Settings</a>
      </div>
    </nav>);
}

export default Sidebar;

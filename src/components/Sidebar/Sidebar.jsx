import React from 'react';
import c from './Sidebar.module.scss'
import {NavLink} from "react-router-dom";
import Profile from "../Profile/Profile";

const Sidebar = () => {
    return (
        <nav className={c.nav}>
            <div>
                <NavLink to="/profile/" activeClassName={c.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users' activeClassName={c.active}>Users</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={c.active}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
            </div>
            <br></br>
            <div>
                <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
            </div>
            <div>
            <NavLink to="/friends" activeClassName={c.active}>Friends</NavLink>
            </div>
        </nav>);
}

export default Sidebar;

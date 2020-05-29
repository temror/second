import React from 'react';
import c from './User.module.scss'
import {NavLink} from "react-router-dom";

const User = (props) =>
{
    return(
        <div className={c.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={c.active}>
                <span>__</span>{props.userName}<span>__</span>
            </NavLink>
        </div>
    )
}

export default User;
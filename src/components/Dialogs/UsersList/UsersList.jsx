import React from 'react';
import c from './UsersList.module.scss'
import {NavLink} from "react-router-dom";
const UsersList = (props) => {
    let newUsers = props.users.map(fnc => (
    <div className={c.dialog}>
        <NavLink to={'/dialogs/' + fnc.id} activeClassName={c.active}>
            <span>__</span>{fnc.userName}<span>__</span>
        </NavLink>
    </div>
        ))
    return (
        <div className={c.users}>
            <h1>Dialogs</h1>
            {newUsers}
        </div>
    );
}

export default UsersList;

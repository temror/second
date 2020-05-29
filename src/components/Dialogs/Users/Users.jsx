import React from 'react';
import c from './Users.module.scss'
import User from "./User/User";
const Users = (props) => {
    let newUsers = props.users.map(fnc => (<User userName = {fnc.userName} id = {fnc.id} />))
    return (
        <div className={c.users}>
            <h1>Dialogs</h1>
            {newUsers}
        </div>
    );
}

export default Users;

import React from 'react';
import c from './Users.module.scss'
import User from "./User/User";
import Users from "./Users";
const UsersContainer = (props) => {
    let state = props.store.getState()
    let users = state.dialogs.users
    return (
        <Users users={users} />
    );
}

export default UsersContainer;

import React from 'react';
import UsersList from "./UsersList";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        users : state.dialogs.usersList
    }
}

const UsersListContainer = connect(mapStateToProps)(UsersList)
export default UsersListContainer;

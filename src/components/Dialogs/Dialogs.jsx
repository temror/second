import React from 'react';
import c from './Dialogs.module.scss'
import MessagesContainer from "./Messages/MessagesContainer";
import UsersListContainer from "./UsersList/UsersListContainer";
import SendMessageContainer from "./SendMessage/SendMessageContainer";
const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <UsersListContainer/>
            <MessagesContainer/>
            <SendMessageContainer/>

        </div>
    );
}

export default Dialogs;

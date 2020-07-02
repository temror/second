import React from 'react';
import c from './Dialogs.module.scss'
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import SendMessageContainer from "./SendMessage/SendMessageContainer";
const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <UsersContainer/>
            <MessagesContainer/>
            <SendMessageContainer/>

        </div>
    );
}

export default Dialogs;

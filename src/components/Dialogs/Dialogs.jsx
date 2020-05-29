import React from 'react';
import c from './Dialogs.module.scss'
import Users from "./Users/Users";
import Messages from "./Messages/Messages";
import SendMessage from "./SendMessage/SendMessage";
const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <Users users={props.dialogs.users}/>
            <Messages messages={props.dialogs.messages}/>
            <SendMessage dispatch={props.dispatch} messageText={props.dialogs.messageText}/>

        </div>
    );
}

export default Dialogs;

import React from 'react';
import c from './Dialogs.module.scss'
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";
import SendMessageContainer from "./SendMessage/SendMessageContainer";
const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <UsersContainer store={props.store}/>
            <MessagesContainer store={props.store}/>
            <SendMessageContainer store={props.store}/>

        </div>
    );
}

export default Dialogs;

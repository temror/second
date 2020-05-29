import React from 'react';
import c from './Messages.module.scss'
import Message from "./Message/Message";

const Messages = (props) => {
    let newMessages = props.messages.map(mes => <Message text={mes.text} id={mes.id} me={mes.me}/>);
    return (
        <div className={c.messages}>
            {newMessages}
        </div>
    );
}

export default Messages;

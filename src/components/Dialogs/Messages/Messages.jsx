import React from 'react';
import c from './Messages.module.scss'

const Messages = (props) => {
    let newMessages = props.messages.map(m =>
    <div id={m.id} className={c.message}>
        {m.text}
    </div>);
    return (
        <div className={c.messages}>
            {newMessages}
        </div>
    );
}

export default Messages;

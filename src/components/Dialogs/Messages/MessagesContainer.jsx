import React from 'react';
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let state = props.store.getState()
    let messages = state.dialogs.messages
    return (
        <Messages messages={messages}/>
    );
}

export default MessagesContainer;

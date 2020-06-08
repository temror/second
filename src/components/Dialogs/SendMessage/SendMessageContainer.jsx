import React from 'react';
import {changeMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogs-reduсer";
import SendMessage from "./SendMessage";

const SendMessageContainer = (props) => {
    let state = props.store.getState();
    let messageText = state.dialogs.messageText
    let sendMessageContainer = (text) => {
        props.store.dispatch(sendMessageActionCreator(text))
        props.store.dispatch(changeMessageTextActionCreator(' '))
    }
    let onMessageChangeContainer = (text) => {
        props.store.dispatch(changeMessageTextActionCreator(text))
    }
    return (
        <SendMessage
            sendMessageContainer={sendMessageContainer}
            onMessageChangeContainer={onMessageChangeContainer}
            messageText={messageText}
        />
    )
}

export default SendMessageContainer;
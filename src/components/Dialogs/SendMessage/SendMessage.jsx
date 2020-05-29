import React from 'react';
import c from './SendMessage.module.scss'
import {changeMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/state";

const SendMessage = (props) =>
{
    let messageText = React.createRef();
    let sendMessage = () =>
    {
        let text = messageText.current.value;
        props.dispatch(sendMessageActionCreator(text))
        props.dispatch(changeMessageTextActionCreator(' '))
    }
    let onMessageChange = () =>
    {
        let text = messageText.current.value;
        props.dispatch(changeMessageTextActionCreator(text))
    }
    return(
        <div className={c.form}>
            <input type="text"
                   ref={messageText}
                   value = {props.messageText}
                   onChange={onMessageChange}/>
            <button onClick={sendMessage}>Send></button>
        </div>
    )
}

export default SendMessage;
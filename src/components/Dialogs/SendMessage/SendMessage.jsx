import React from 'react';
import c from './SendMessage.module.scss'

const SendMessage = (props) =>
{
    let messageText = React.createRef();
    let sendMessage = () =>
    {
        let text = messageText.current.value;
        props.sendMessageContainer(text)
    }
    let onMessageChange = () =>
    {
        let text = messageText.current.value;
        props.onMessageChangeContainer(text)
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
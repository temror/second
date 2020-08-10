import React from 'react';
import c from './SendMessage.module.scss'

const SendMessage = (props) =>
{
    let messageText = React.createRef();
    let sendMessage = () =>
    {
        props.sendMessage(messageText.current.value)
        props.changeMessageText('')
    }
    let onMessageChange = () =>
    {
        props.changeMessageText(messageText.current.value)
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
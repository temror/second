import React from 'react';
import {changeMessageText, sendMessage} from "../../../redux/dialogs-reduсer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        messageText : state.dialogs.messageText
    }
}
const SendMessageContainer = connect(mapStateToProps,
    {sendMessage,changeMessageText})(SendMessage)

export default SendMessageContainer;
import React from 'react';
import {changeMessageTextActionCreator, sendMessageActionCreator} from "../../../redux/dialogs-reduсer";
import SendMessage from "./SendMessage";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        messageText : state.dialogs.messageText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessageContainer : (text) =>{
            dispatch(sendMessageActionCreator(text))
            dispatch(changeMessageTextActionCreator(' '))

        },
        onMessageChangeContainer : (text) =>{
            dispatch(changeMessageTextActionCreator(text))
        }
    }
}
const SendMessageContainer = connect(mapStateToProps,mapDispatchToProps)(SendMessage)

export default SendMessageContainer;
import React from 'react';
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        messages: state.dialogs.messages
    }
}
const MessagesContainer = connect(mapStateToProps)(Messages)

export default MessagesContainer;

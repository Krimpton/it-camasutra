import React from "react";
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/messagesReducer";
import Messages from "./Messages";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMes: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (message) => {
            dispatch(updateNewMessageText(message));
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
import React from "react";
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/messagesReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    let state = props.store.getState().messagesPage;


    let newMessageText = state.newMessageText;

    let sendMes = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (message) => {
        props.store.dispatch(updateNewMessageText(message));
    }

    return (<Messages sendMes={sendMes} onMessageChange={onMessageChange} messagesPage={state}/>)

}

export default MessagesContainer;
import React from "react";
import ss from './Messages.module.css';
import MessageSms from "./Dialogs/MessagesSms";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/messagesReducer";


const Messages = (props) => {

    let state = props.store.getState().messagesPage;

    let dialog = state.messageData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = state.messageInfo.map(m => <MessageSms sms={m.sms}/>);
    let newMessageText = state.newMessageText;

    let sendMes = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.store.dispatch(updateNewMessageText(message));
    }
    return (<div className={ss.dialogs}>
        <div className={ss.dialogsItems}>
            {dialog}
        </div>
        <div className={ss.messages}>
            {messages}
        </div>

        <div className={ss.textInput}>
            <button onClick={sendMes}>Send message</button>
            <textarea onChange={onMessageChange}
                      value={newMessageText}/>
        </div>
    </div>);
}

export default Messages;
import React from "react";
import ss from './Messages.module.css';
import MessageSms from "./Dialogs/MessagesSms";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (props) => {

    let state = props.messagesPage;

    let dialog = state.messageData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messages = state.messageInfo.map(m => <MessageSms sms={m.sms} key={m.id}/>);
    let newMessageText = state.newMessageText;

    let sendMes = () => {
       props.sendMes();
    }

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.onMessageChange(message);
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
                      value={newMessageText}
                      placeholder='Enter your message'/>
        </div>
    </div>);
}

export default Messages;
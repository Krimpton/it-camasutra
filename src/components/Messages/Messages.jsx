import React from "react";
import ss from './Messages.module.css';
import MessageSms from "./Dialogs/MessagesSms";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (props) => {

    let dialog = props.state.messageData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.state.messageInfo.map(m => <MessageSms sms={m.sms}/>);

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogsItems}>
                {dialog}
            </div>

            <div className={ss.messages}>
                {messages}
            </div>
        </div>)
}

export default Messages;
import React from "react";
import ss from './Messages.module.css';
import {NavLink} from "react-router-dom";
import MessageSms from "./Dialogs/MessagesSms";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (messageData, messageInfo) => {

    let dialogsItems = messageData.map(d => <DialogItem name={d.name} id={d.id}/>);


    let messages = messageInfo.map(m => <MessageSms sms={m.sms} id={m.id}/>)

    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogsItems}>
                {dialogsItems}
            </div>

            <div className={ss.messages}>
                {messages}
            </div>
        </div>)
}

export default Messages;
import React from "react";
import ss from './Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div className={ss.dialogs + '' + ss.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageSms = (props) => {
    return (
        <div className={ss.message}>{props.sms}</div>
    )
}

const Messages = (props) => {
    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogsItems}>
                <DialogItem name="Dimych" id="1"/>
                <DialogItem name="Alex" id="2"/>
                <DialogItem name="Andry" id="3"/>
                <DialogItem name="Michail" id="4"/>
                <DialogItem name="Vova" id="5"/>
                <DialogItem name="Vadim" id="6"/>
                <DialogItem name="Ignat" id="7"/>
            </div>

            <div className={ss.messages}>
                <MessageSms sms="Hello"/>
                <MessageSms sms="What do you need bro?"/>
                <MessageSms sms="play ow!"/>
                <MessageSms sms="play overwatch now!"/>
                <MessageSms sms="How do you do?!"/>
                <MessageSms sms="Just do it!!"/>
                <MessageSms sms="come to mee again!"/>
            </div>
        </div>)
}

export default Messages;




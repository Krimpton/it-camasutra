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

    let messageData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Andry'},
        {id: 4, name: 'Michail'},
        {id: 5, name: 'Vova'},
        {id: 6, name: 'Vadim'},
        {id: 7, name: 'Ignat'},
    ];


    let messageInfo = [
        {id: 1, sms: 'Hello'},
        {id: 2, sms: 'play ow'},
        {id: 3, sms: 'What do you need bro?'},
        {id: 4, sms: 'play overwatch now'},
        {id: 5, sms: 'How do you do?!'},
        {id: 6, sms: 'Just do it!!'},
        {id: 7, sms: 'come to mee again'},
    ];

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
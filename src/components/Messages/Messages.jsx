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

let messageData = [
    { id: 1, name: 'Dimych'},
    { id: 2, name: 'Alex'},
    { id: 3, name: 'Andry'},
    { id: 4, name: 'Michail'},
    { id: 5, name: 'Vova'},
    { id: 6, name: 'Vadim'},
    { id: 7, name: 'Ignat'},
    ];



let messageInfo = [
    { id: 1, sms: 'Hello'},
    { id: 2, sms: 'play ow'},
    { id: 3, sms: 'What do you need bro?'},
    { id: 4, sms: 'play overwatch now'},
    { id: 5, sms: 'How do you do?!'},
    { id: 6, sms: 'Just do it!!'},
    { id: 7, sms: 'come to mee again'},
    ];


const Messages = (props) => {
    return (
        <div className={ss.dialogs}>
            <div className={ss.dialogsItems}>
                <DialogItem name={messageData[0].name} id={messageData[0].id}/>
                <DialogItem name={messageData[1].name} id={messageData[1].id}/>
                <DialogItem name={messageData[2].name} id={messageData[2].id}/>
                <DialogItem name={messageData[3].name} id={messageData[3].id}/>
                <DialogItem name={messageData[4].name} id={messageData[4].id}/>
                <DialogItem name={messageData[5].name} id={messageData[5].id}/>
                <DialogItem name={messageData[6].name} id={messageData[6].id}/>
            </div>

            <div className={ss.messages}>
                <MessageSms sms={messageInfo[0].sms} id={messageInfo[0].id}/>
                <MessageSms sms={messageInfo[1].sms} id={messageInfo[1].id}/>
                <MessageSms sms={messageInfo[2].sms} id={messageInfo[2].id}/>
                <MessageSms sms={messageInfo[3].sms} id={messageInfo[3].id}/>
                <MessageSms sms={messageInfo[4].sms} id={messageInfo[4].id}/>
                <MessageSms sms={messageInfo[5].sms} id={messageInfo[5].id}/>
                <MessageSms sms={messageInfo[6].sms} id={messageInfo[6].id}/>
            </div>
        </div>)
}

export default Messages;
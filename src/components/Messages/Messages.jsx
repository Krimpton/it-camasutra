import React from "react";
import ss from './Messages.module.css';
import MessageSms from "./Dialogs/MessagesSms";
import DialogItem from "./DialogItem/DialogItem";
import Redirect from "react-router-dom/es/Redirect";
import {AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";

const Messages = (props) => {
    let state = props.messagesPage;

    let dialog = state.messageData.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
    let messages = state.messageInfo.map(m => <MessageSms sms={m.sms} key={m.id}/>);
    let newMessageText = state.newMessageText;

    let addNewMessage = (values) => {
        props.sendMes(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (<div className={ss.dialogs}>
        <div className={ss.dialogsItems}>
            {dialog}
        </div>
        <div className={ss.messages}>
            {messages}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>);

}

export default Messages;
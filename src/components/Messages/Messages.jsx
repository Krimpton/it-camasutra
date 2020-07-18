import React from "react";
import ss from './Messages.module.css';
import MessageSms from "./Dialogs/MessagesSms";
import DialogItem from "./DialogItem/DialogItem";


const Messages = (props) => {

    let dialog = props.messagesPage.messageData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messages = props.messagesPage.messageInfo.map(m => <MessageSms sms={m.sms}/>);

    let newMesElement = React.createRef();

    let sendMes = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMesElement.current.value;
        props.updateNewMessageText(text);
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
                      value={props.newMessageText}
                      ref={newMesElement}/>
        </div>
    </div>);
}

export default Messages;
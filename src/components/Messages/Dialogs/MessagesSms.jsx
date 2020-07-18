import React from "react";
import ss from './../Messages.module.css';

const MessageSms = (props) => {
    return (
        <div className={ss.message}>
            {props.sms}
        </div>
    )
}


export default MessageSms;
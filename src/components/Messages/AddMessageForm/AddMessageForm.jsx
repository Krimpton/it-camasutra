import ss from "../Messages.module.css";
import {Field, reduxForm} from "redux-form";
import React from "react";
import {textArea} from "../../Common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validator";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <div className={ss.textInput}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={textArea}
                           validate={[required, maxLength50]}
                           name="newMessageBody" placeholder="Enter your message"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </form>
        </div>
    )
}

export const AddMessageFormRedux = reduxForm({form: "messagesAddMessageForm"})(AddMessageForm);

import React from "react";
import {CreateField, Input, textArea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import {Contact} from "./ProfileInfo";
import createField from "redux-form/lib/createField";
import ss from "../../Login/Login.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={ss.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>save</button>
        </div>
        <div><b>Full name:</b> {CreateField("Full name", "fullName", [], Input)}</div>
        <div><b>Looking for a job:</b>{CreateField("", "fullName", [], Input, {type: "checkbox"})}</div>
        <div><b>My professionals
            skills:</b>{CreateField("My professionals skills", "lookingForAJobDescription", [], textArea, {type: "Textarea"})}
        </div>
        <div><b>About me:</b>{CreateField("About me", "aboutMe", [], textArea)}</div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key}>
                <b>{key}:{createField(key, "contacts" + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;
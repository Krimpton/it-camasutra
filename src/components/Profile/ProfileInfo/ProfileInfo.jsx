import React, {setState} from 'react';
import ss from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import userPhoto from "../../../assets/images/nextpng.com.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    if (!profile) {
        return <Preloader/>
    }

    let [editMode, setEditMode] = setState(false);

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.file[0])
        }
    }


    const onSubmit = async (formData) => {
        await saveProfile(formData)
             setEditMode(false)
    }


    return (
        <div>
            <div className={ss.forestImg}>
                <img
                    src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=240"/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
            <div className={ss.descriptionBlock}>
                <img src={profile.photos.large || userPhoto}
                     className={ss.mainPhoto}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            <ProfileDataFormReduxForm/>
        </div>
    )
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>

    </div>
}


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={ss.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;

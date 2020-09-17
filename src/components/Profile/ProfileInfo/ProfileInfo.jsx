import React from 'react';
import ss from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={ss.forestImg}>
                {/*<img src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=950&w=240"/>*/}
            </div>

            <div className={ss.descriptionBlock}>
                <img src={profile.photos.large}/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>

    )
}
export default ProfileInfo;

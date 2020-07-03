import React from 'react';
import ss from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={ss.forestImg}>
                <img src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=440"/>
            </div>

        <div className={ss.descriptionBlock}>
            ava+description
        </div>

    </div>

    )
}


export default ProfileInfo;

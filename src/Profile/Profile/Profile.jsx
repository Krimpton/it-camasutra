import React from 'react';
import ss from './Profile.module.css';
import MyPosts from "../MyPosts/MyPosts";

const Profile = () => {
    return <div className={ss.content}>
      <div>
      <img className={ss.forest} src="https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
      </div>

      <div>
        ava+description
      </div>
      <MyPosts />
  </div>
}


export default Profile;

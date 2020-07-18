import React from 'react';
import ss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsData={props.profilePage.postsData}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>
        </div>)
}


export default Profile;

import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostText(text);
        props.store.dispatch(action);
    }

    return (<MyPosts onPostChange={onPostChange}
                     addPost={addPost}
                     postsData={state.profilePage.postsData}
                     newPostText={state.profilePage.newPostText}/>)

}

export default MyPostsContainer;
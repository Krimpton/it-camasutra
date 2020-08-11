import React from 'react';
import {addPostActionCreator, updateNewPostText} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
        (store) => {
            let state = store.getState();
            let addPost = () => {
                store.dispatch(addPostActionCreator());
            }
            let onPostChange = (text) => {
                let action = updateNewPostText(text);
                store.dispatch(action);
            }
            return <MyPosts onPostChange={onPostChange}
                            addPost={addPost}
                            postsData={state.profilePage.postsData}
                            newPostText={state.profilePage.newPostText}/>
        }
            }
    </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
import React from 'react';
import {addPostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostTextArea) => {
            dispatch(addPostActionCreator(newPostTextArea));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
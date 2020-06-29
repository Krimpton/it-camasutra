import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
    return <div>
    <div>My posts</div>

    <textarea></textarea>
    <button>Add post</button>

        <div className={ss.posts}>
        <Post message='Hi, hello    ' like="like  " count="11"/>
        <Post message='sfu    ' like="like  " count="13"/>
        </div>
    </div>
}


export default MyPosts;

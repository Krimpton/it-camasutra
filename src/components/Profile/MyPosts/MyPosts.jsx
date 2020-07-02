import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
    return <div className='postsBlock'>
        <div>My posts</div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={ss.posts}>
            <Post message='Hi, hello    ' like="like  " count="11"/>
            <Post message='sfu    ' like="like  " count="13"/>
        </div>
    </div>
}


export default MyPosts;

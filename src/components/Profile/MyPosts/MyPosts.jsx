import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";

let PostsData = [
    {id: 0, sms: 'Hi, hello', likeCount: 0},
    {id: 1, sms: 'Wow, Git!', likeCount: 1},
];

const MyPosts = () => {
    return <div className={ss.postsBlock}>
        <div>My posts</div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={ss.posts}>
            <Post message={PostsData[0].sms} likeCount={PostsData[0].likeCount}/>
            <Post message={PostsData[1].sms} likeCount={PostsData[1].likeCount}/>

        </div>
    </div>
}


export default MyPosts;

import React from 'react';
import ss from './MyPosts.module.css';

const MyPosts = () => {
    return <div>
    <div>My posts</div>
    <div>New post</div>
    <div className={ss.posts}>Post 1</div>
    <div className={ss.item}>Post 2</div>
    </div>
}


export default MyPosts;

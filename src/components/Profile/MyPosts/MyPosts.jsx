import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (PostsData) => {

    let posts = PostsData.map(p => <Post message={p.sms} likeCount={p.likeCount}/>);

    return <div className={ss.postsBlock}>
        <div>My posts</div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={ss.posts}>
            {posts}
        </div>
    </div>
}


export default MyPosts;

import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post sms={p.sms} likeCount={p.likeCount}/>);

    return (<div className={ss.postsBlock}>
        <div>My posts</div>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add post</button>
        </div>
        <div className={ss.postsData}>
            {posts}
        </div>
    </div>)
}


export default MyPosts;

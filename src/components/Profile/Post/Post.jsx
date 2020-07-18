import React from 'react';
import ss from './Post.module.css';

const Post = (props) => {
    return <div className={ss.postsData}>
        <img className={ss.postImg} src="https://miro.medium.com/max/1280/1*sC4NINNboufYoGE3GnftHQ.jpeg" alt=""/>
        {props.sms}
        <div className={ss.likes}>likes {props.likeCount}</div>
    </div>
}

export default Post;
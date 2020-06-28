import React from 'react';
import ss from './Post.module.css';

const Post = (props) => {
    return <div className={ss.posts}>
    <img src="https://miro.medium.com/max/1280/1*sC4NINNboufYoGE3GnftHQ.jpeg" alt=""/>
        {props.message}
        {props.like}
        {props.count}
        {/*<div><span>like</span></div>*/}
    </div>
}

export default Post;
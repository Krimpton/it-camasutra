import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post sms={p.sms} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();
    // создание ссылки

    let addPost = () => {
        props.addPost();
        // собрали пост
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // взяли значение из textArea
        props.updateNewPostText(text);
        // Запись данных в state из textArea
    }

    return (<div className={ss.postsBlock}>
        <div>My posts</div>
        <div>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={ss.postsData}>
            {posts}
        </div>
    </div>);
}


export default MyPosts;
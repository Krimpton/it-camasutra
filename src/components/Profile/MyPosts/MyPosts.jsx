import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post sms={p.sms} likeCount={p.likeCount} key={p.id}/>);

    let newPostElement = React.createRef();  // создание ссылки

    let addPost = () => {
        props.addPost(); // после откработки callback функциит, срабатывает функция, которая пришли из props
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;  // взяли значение из textArea
        props.onPostChange(text);
    }

    return (<div className={ss.postsBlock}>
        <div>My posts</div>
        <div>
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}/>
        </div>
        <div>
            <button onClick={addPost}>Add post</button>{/*при изменении addPost передается локальная callback функция onPostChange*/}
        </div>
        <div className={ss.postsData}>
            {posts}
        </div>
    </div>);
}


export default MyPosts;
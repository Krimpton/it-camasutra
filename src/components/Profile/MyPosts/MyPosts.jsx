import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../Redux/state";


const MyPosts = (props) => {

    let posts = props.postsData.map(p => <Post sms={p.sms} likeCount={p.likeCount}/>);

    let newPostElement = React.createRef();
    // создание ссылки

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        // props.dispatch({addPostActionCreator});
        // props.addPost();
        // после откработки callback функциит, срабатывает функция, которая пришли из props
        // собрали пост
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // взяли значение из textArea
        let action = updateNewPostText(text);
        // let action = {updateNewPostText, newText: text};
        props.dispatch(action);
        // props.updateNewPostText(text);
        // Запись данных в state из textArea
    }

    return (<div className={ss.postsBlock}>
        <div>My posts</div>
        <div>
            {/*при изменении textArea передается локальная callback функция onPostChange*/}
            <textarea onChange={onPostChange}
                      ref={newPostElement}
                      value={props.newPostText}/>
        </div>
        <div>
            {/*при изменении addPost передается локальная callback функция onPostChange*/}
            <button onClick={addPost}>Add post</button>
        </div>
        <div className={ss.postsData}>
            {posts}
        </div>
    </div>);
}


export default MyPosts;
import React from 'react';
import ss from './MyPosts.module.css';
import Post from "../Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {textArea} from "../../Common/FormsControls/FormsControls";

const MyPosts = React.memo( props => {
    console.log('RENDER YOOO!')
    let posts = props.postsData.map(p => <Post sms={p.sms} likeCount={p.likeCount} key={p.id}/>);

    let addPost = (values) => {
        props.addPost(values.newPostTextArea);
    }

    return (
        <div className={ss.postsData}>
            {posts}
            <AddPostDataRF onSubmit={addPost}/>
        </div>)
});

const maxLength10 = maxLengthCreator(10);

const MyPostFormRedux = (props) => {
    return <div className={ss.postsBlock}>
        <h3>My Posts</h3>
        <form onSubmit={props.handleSubmit}>
            <Field component={textArea} name="newPostTextArea" placeholder="Enter your message"
                   validate={[required, maxLength10]}/>
            <button>Add post</button>
        </form>
    </div>
}

const AddPostDataRF = reduxForm({form: "postAddRF"})(MyPostFormRedux);


export default MyPosts;
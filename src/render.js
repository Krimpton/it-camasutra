import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewPostText, updateNewMessageText} from './Redux/state';
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText}
                 addMessage={addMessage}/>
        </BrowserRouter>, document.getElementById('root'));
}
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 // бинд метода стор да бы сохранить владельца метода
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}
                 updateNewMessageText={store.updateNewMessageText.bind(store)}
                 addMessage={store.addMessage.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());


store.subscribe(rerenderEntireTree);



serviceWorker.unregister();
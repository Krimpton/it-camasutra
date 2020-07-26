import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/redux-store";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 dispatch={store.dispatch.bind(store)} store={store}/>{/*бинд метода стор да бы сохранить владельца метода*/}
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());


store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});


serviceWorker.unregister();
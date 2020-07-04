import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')


);


let messageData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Andry'},
    {id: 4, name: 'Michail'},
    {id: 5, name: 'Vova'},
    {id: 6, name: 'Vadim'},
    {id: 7, name: 'Ignat'},
];


let messageInfo = [
    {id: 1, sms: 'Hello'},
    {id: 2, sms: 'play ow'},
    {id: 3, sms: 'What do you need bro?'},
    {id: 4, sms: 'play overwatch now'},
    {id: 5, sms: 'How do you do?!'},
    {id: 6, sms: 'Just do it!!'},
    {id: 7, sms: 'come to mee again'},
];

let PostsData = [
    {id: 0, sms: 'Hi, hello', likeCount: 0},
    {id: 1, sms: 'Wow, Git!', likeCount: 1},
];


serviceWorker.unregister();

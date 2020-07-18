import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        postsData: [
            {id: 0, sms: 'Hi, hello', likeCount: 0},
            {id: 1, sms: 'Wow, Git!', likeCount: 1},
        ],
        newPostText: ''


    },
    messagesPage: {
        messageData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Alex'},
            {id: 3, name: 'Andry'},
            {id: 4, name: 'Michail'},
            {id: 5, name: 'Vova'},
            {id: 6, name: 'Vadim'},
            {id: 7, name: 'Ignat'},
        ],
        messageInfo: [
            {id: 1, sms: 'Hello'},
            {id: 2, sms: 'play ow'},
            {id: 3, sms: 'What do you need bro?'},
            {id: 4, sms: 'play overwatch now'},
            {id: 5, sms: 'How do you do?!'},
            {id: 6, sms: 'Just do it!!'},
            {id: 7, sms: 'come to mee again'},
        ],
        newMessageText: '666111'
    },


    sidebarPage: {
        sidebar: [
            {id: 1, name: 'Dimych', icon: 'icon'},
            {id: 2, name: 'Alex', icon: 'icon'},
            {id: 3, name: 'Andry', icon: 'icon'},
            {id: 4, name: 'Michail', icon: 'icon'},
            {id: 5, name: 'Vova', icon: 'icon'},
            {id: 6, name: 'Vadim', icon: 'icon'},
            {id: 7, name: 'Ignat', icon: 'icon'},
        ],
    }
}

window.state = state;
// делает state глобальным для чтения


export let addPost = () => {
    let newPost = {
        id: 5,
        sms: state.profilePage.newPostText,
        likeCount: 0
    };
    // Пушит данные из textArea в конец масива из state
    state.profilePage.postsData.push(newPost);
    // Зануление textArea
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export let addMessage = () => {
    let newMes = {
        id: 0,
        sms: state.messagesPage.newMessageText
    };
    // Пушит данные из textArea в конец масива из state
    state.messagesPage.messageInfo.push(newMes);
    // Зануление textArea
    // state.messagesPage.newMessageText = '';
    rerenderEntireTree(state);  
}

export let updateNewMessageText = (newMessage) => {
    state.messagesPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export default state;
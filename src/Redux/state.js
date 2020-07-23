const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
// использование констант, чтобы снизить шанс ошибки, при написании имени переменной

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 0, sms: 'Hi, hello', likeCount: 0},
                {id: 1, sms: 'Wow, Git!', likeCount: 1},
            ],
            newPostText: '',


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
            newMessageText: '666111',
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
    },
    _callSubscriber() {
        console.log('state has changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    // методы

    dispatch(action) { // type: 'ADD-POST'}
        // экшин это какой то обьект(действие), который мы диспатчим
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                sms: this._state.profilePage.newPostText,
                likeCount: 0
            };
            // Пушит данные из textArea в конец масива из state
            this._state.profilePage.postsData.push(newPost);
            // Зануление textArea
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD_MESSAGE') {
            let newMessage = this._state.messagesPage.newMessageText;
            this._state.messagesPage.newMessageText = ''; // Зануление textArea
            this._state.messagesPage.messageInfo.push({id: 8, sms: newMessage}); // Пушит данные из textArea в конец масива из state
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.messagesPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state); // сообщает внешнему миру об изменении state
        }
    }
}

// export const sendMessageActionCreator = () => ({type: 'SEND_MESSAGE'});
// export const updateNewMessageText = () => ({type: });


export const addPostActionCreator = () => ({type: 'ADD_POST'});
// нет тела функции, т.к она только возвращает addPost и больше ничего не делает
// actionCreator функция, которая возвращает обьект action

export const updateNewPostText = (text) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text});


export const addMessageActionCreator = () => ({type: 'ADD_MESSAGE'});

export const updateNewMessageText = (message) => ({type: 'UPDATE_NEW_MESSAGE_TEXT', newMessage: message});

window.store = store;
// делает store глобальным для чтения
export default store;
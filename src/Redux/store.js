import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import sidebarReducer from "./sidebarReducer";

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

    dispatch(action) {// экшин это какой то обьект(действие), который мы диспатчим
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        // добавление reducer функции, которые принимают часть state, action и преобразовывают его
        this._callSubscriber(this._state);
    }
}

window.store = store;
// делает store глобальным для чтения
export default store;
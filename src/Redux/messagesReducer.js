const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
// использование констант, чтобы снизить шанс ошибки, при написании имени переменной

let initialState = {
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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessage: action.newMessageText,
                newMessageText: '', // Зануление textArea
                messageInfo: [...state.messageInfo, {id: 8, sms: newMessage}] // Пушит данные из textArea в конец масива из state
            };
        case 'UPDATE_NEW_MESSAGE_TEXT':
            return {
                ...state,
                newMessageText: action.newMessage, // сообщает внешнему миру об изменении state
            };
        default:
            return state;
    }
};
export const addMessageActionCreator = () => ({type: 'ADD_MESSAGE'});
export const updateNewMessageText = (message) => ({type: 'UPDATE_NEW_MESSAGE_TEXT', newMessage: message});


export default messagesReducer;
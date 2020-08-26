const ADD_MESSAGE = 'ADD-MESSAGE';
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
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = action.newMessageBody;
            return {
                ...state,
                messageInfo: [...state.messageInfo, {id: 8, sms: newMessage}] // Пушит данные из textArea в конец масива из state
            };
        default:
            return state;
    }
};
export const addMessageActionCreator = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody});

export default messagesReducer;
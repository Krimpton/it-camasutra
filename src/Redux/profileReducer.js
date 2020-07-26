const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// использование констант, чтобы снизить шанс ошибки, при написании имени переменной

let initialState = {
        postsData: [
            {id: 0, sms: 'Hi, hello', likeCount: 0},
            {id: 1, sms: 'Wow, Git!', likeCount: 1},
        ],
        newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            let newPost = {
                id: 5,
                sms: state.newPostText,
                likeCount: 0
            };
            state.postsData.push(newPost); // Пушит данные из textArea в конец масива из state
            state.newPostText = ''; // Зануление textArea
            return state;
        case 'UPDATE_NEW_POST_TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: 'ADD_POST'});
// нет тела функции, т.к она только возвращает addPost и больше ничего не делает
// actionCreator функция, которая возвращает обьект action
export const updateNewPostText = (text) => ({type: 'UPDATE_NEW_POST_TEXT', newText: text});


export default profileReducer;
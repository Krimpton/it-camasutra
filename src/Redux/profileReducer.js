const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
// использование констант, чтобы снизить шанс ошибки, при написании имени переменной

let initialState = { //данные state
    postsData: [
        {id: 0, sms: 'Hi, hello', likeCount: 0},
        {id: 1, sms: 'Wow, Git!', likeCount: 1},
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                sms: state.newPostText,
                likeCount: 0
            };
            return {
                ...state, // копия массива
                postsData: [...state.postsData, newPost],// Пушит данные из textArea в конец масива из state
                newPostText: '' // Зануление textArea
            };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
}
// let stateCopy = {...state}; // делаем копию обьекта
export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
// нет тела функции, т.к она только возвращает addPost и больше ничего не делает
// actionCreator функция, которая возвращает обьект action
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});


export default profileReducer;
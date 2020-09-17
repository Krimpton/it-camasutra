import {profileApi, usersApi} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
// использование констант, чтобы снизить шанс ошибки, при написании имени переменной

let initialState = { //данные state
    postsData: [
        {id: 0, sms: 'Hi, hello', likeCount: 0},
        {id: 1, sms: 'Wow, Git!', likeCount: 1},
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                sms: action.newPostTextArea,
                likeCount: 0
            };
            return {
                ...state, // копия массива
                postsData: [...state.postsData, newPost],// Пушит данные из textArea в конец масива из state
            };
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state, postsData: state.postsData.filter(p => p.id != action.postId.id)
            }
        }
        default:
            return state;
    }
}
// let stateCopy = {...state}; // делаем копию обьекта
export const addPostActionCreator = (newPostTextArea) => ({type: ADD_POST, newPostTextArea});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = usersApi.getProfile(userId)
    dispatch(setUserProfile(response.data));
};

export const getStatus = (userId) => async (dispatch) => {
    let response = profileApi.getStatus(userId)
    dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
    let response = profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

// нет тела функции, т.к она только возвращает addPost и больше ничего не делает
// actionCreator функция, которая возвращает обьект action

export default profileReducer;
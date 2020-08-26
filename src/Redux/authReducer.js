import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}}); // что записывается в data

export const getAuthUserData = () => (dispatch) => {
    authApi.me().then(response => { //запрос на сервак
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(login, password, rememberMe)
        .then(response => { //запрос на сервак
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    });
}

export const logout = (email, password, rememberMe) => (dispatch) => {
    authApi.logout()
        .then(response => { //запрос на сервак
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
}

export default authReducer;
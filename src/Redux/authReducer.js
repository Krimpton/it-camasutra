import {authApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';


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

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
}); // что записывается в data

export const getAuthUserData = () => async (dispatch) => {
    let response = await authApi.me(); // await'om дожидаемся promise

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await authApi.login(login, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let messages = response.data.messages.legth > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: "Common error"}));
    }
}

export const logout = (email, password, rememberMe) => async (dispatch) => {
    let response = await authApi.logout()
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
}

export default authReducer;
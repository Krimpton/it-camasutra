import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingIsProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state, followingIsProgress: action.isFetching ?
                    [...state.followingIsProgress, action.userId]
                    :
                    [state.followingIsProgress.filer(id => id !== action.userId)]
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const setIsfFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});


export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(setIsfFetching(true)); // показываем крутилку

        usersApi.getUsers(currentPage, pageSize).then(data => { //запрос на сервак
            dispatch(setIsfFetching(false)); // закончиил показывать крутилку
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        dispatch(setIsfFetching(true, userId));
        usersApi.follow(userId).then(response => { //запрос на сервак
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId));
            }
            dispatch(setFollowingProgress(false, userId));
        });
    }
}
export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(setIsfFetching(true, userId));
        usersApi.unfollow(userId).then(response => { //запрос на сервак
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId));
            }
            dispatch(setFollowingProgress(false, userId));
        });
    }
}
export default usersReducer;
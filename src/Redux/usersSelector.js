import {createSelector} from "reselect";

const getUsersSelector = (state) => { // селектор- fun которая принимает state и возвращает, достает нужную часть и возвращает в bussiness
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
});

export const getPageSize = (state) => {
    return state.usersPage.users;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.users;
}

export const getCurrentPage = (state) => {
    return state.usersPage.users;
}

export const getIsFetching = (state) => {
    return state.usersPage.users;
}

export const getFollowingIsProgress = (state) => {
    return state.usersPage.users;
}

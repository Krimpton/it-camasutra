import React from "react";
import Users from "./Users";
import connect from "react-redux/lib/connect/connect";
import {followAC, setUsersAc, unfollowAC} from "../../Redux/usersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
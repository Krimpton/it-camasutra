import React from "react";
import {connect} from 'react-redux';
import {
    follow, getUsers,
    setCurrentPage, setFollowingProgress,
    unfollow
} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {
    componentDidMount() { // вмонтировали компоненту
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setFollowingProgress={this.props.setFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        setFollowingProgress: state.usersPage.setFollowingProgress
    }
}

export default connect(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage,
        setFollowingProgress, getUsers
    })
(UsersContainer);
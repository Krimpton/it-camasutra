import React from "react";
import Paginator from "../Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, follow, unfollow, followingIsProgress, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     followingIsProgress={followingIsProgress}
                                     key={u.id}
                                     unfollow={unfollow}
                                     follow={follow}/>)
            }
        </div>
    </div>
}

export default Users;
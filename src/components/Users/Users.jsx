import React from "react";
import ss from "./User.module.css";
import userPhoto from "../../assets/images/nextpng.com.png";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //округление в большую сторону

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && ss.bold}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}</div>
        {
            props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile' + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        ?<button disabled={props.followingIsProgress.some(id => id === u.id)}
                                  onClick={() => {props.unfollow(u.id)}}>Unfollow</button> //props теперь свойства обьекта = this

                        :<button disabled={props.followingIsProgress.some(id => id === u.id)}
                                  onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
            </span>
                <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            </div>)
        }
    </div>
}

export default Users;
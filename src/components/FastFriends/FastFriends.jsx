import React from "react";
import ss from './FastFriends.module.css';
import {NavLink} from "react-router-dom";

const FastFriends = () => {
    return (
        <div className={ss.listFriends}>
            <div className={ss.icons}>
                <div className={ss.icon}></div>
                <div className={ss.icon}></div>
                <div className={ss.icon}></div>
            </div>
            <div className={ss.names}>
                <NavLink to="/alex" activeClassName={ss.active}><div>Alex</div></NavLink>
                <NavLink to="/vadim" activeClassName={ss.active}><div>Vadim</div></NavLink>
                <NavLink to="/igor" activeClassName={ss.active}><div>Igor</div></NavLink>
            </div>
        </div>
    );
}

export default FastFriends;
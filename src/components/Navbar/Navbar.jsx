import React from 'react';
import ss from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FastFriends from '../FastFriends/FastFriends';
const Navbar = () => {
    return (
        <nav className={ss.nav}>
            <div>
                <div className={ss.item}><NavLink to="/profile" activeClassName={ss.active}>Profile</NavLink></div>
                <div className={ss.item}><NavLink to="/messages" activeClassName={ss.active}>Messages</NavLink></div>
                <div className={ss.item}><NavLink to="/news" activeClassName={ss.active}>News</NavLink></div>
                <div className={ss.item}><NavLink to="/music" activeClassName={ss.active}>Music</NavLink></div>
                <div className={ss.item}><NavLink to="/settings" activeClassName={ss.active}>Settings</NavLink></div>
                <div className={ss.itemLast}><NavLink to="/sidebar" activeClassName={ss.active}>Friends</NavLink></div>
                <FastFriends />
            </div>

        </nav>)
}

export default Navbar;

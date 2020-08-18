import React from 'react';
import ss from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return <header className={ss.header}>
        <img className={ss.headerIcon}
             src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/16058550031557996972-512.png"/>

        <div className={ss.loginBlock}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;
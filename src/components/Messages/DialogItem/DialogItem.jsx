import React from "react";
import ss from './../Messages.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = "/messages/" + props.id;

    return (
        <div className={ss.dialogs + '' + ss.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
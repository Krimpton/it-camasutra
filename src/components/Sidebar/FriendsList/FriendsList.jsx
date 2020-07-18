import React from "react";
import ss from './FriendsList.module.css';
import state from "../../../Redux/state";

const FriendsList = (props) => {
    return(
        <div className={ss.friends}>
            <div className={ss.id}>
                {props.id}
            </div>
            <div className={ss.name}>
                {props.name}
            </div>
        </div>
    );
}

export default FriendsList;
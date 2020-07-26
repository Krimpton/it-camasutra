import React from "react";
import ss from './Sidebar.module.css';
import state from "../../Redux/store";
import FriendsList from "./FriendsList/FriendsList";

const Sidebar = (props) => {

    let list = props.state.sidebar.map(l => <FriendsList id={l.id} name={l.name}/>);

    return (<div className={ss.list}>
        <div className={ss.listLocal}>
            {list}
        </div>
    </div>);

}
export default Sidebar;
import React from "react";
import ss from './Sidebar.module.css';
import FriendsList from "./FriendsList/FriendsList";

const Sidebar = (props) => {

    let state = props.sidebarPage;

    let list = state.sidebar.map(l => <FriendsList id={l.id} name={l.name} key={l.id}/>);

    return (<div className={ss.list}>
        <div className={ss.listLocal}>
            {list}
        </div>
    </div>);

}
export default Sidebar;
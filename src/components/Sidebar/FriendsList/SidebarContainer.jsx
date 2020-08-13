import React from "react";
import connect from "react-redux/lib/connect/connect";
import Sidebar from "../Sidebar";


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebarPage.sidebar
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;
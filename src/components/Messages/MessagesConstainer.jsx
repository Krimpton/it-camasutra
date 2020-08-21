import React from "react";
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMes: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (message) => {
            dispatch(updateNewMessageText(message));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    (withAuthRedirect)
)(Messages);


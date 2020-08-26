import React from "react";
import {addMessageActionCreator} from "../../Redux/messagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMes: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    (withAuthRedirect)
)(Messages);


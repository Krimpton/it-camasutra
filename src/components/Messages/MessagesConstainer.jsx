import React from "react";
import {addMessageActionCreator, updateNewMessageText} from "../../Redux/messagesReducer";
import Messages from "./Messages";
import StoreContext from "../../StoreContext";


const MessagesContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().messagesPage;
                    let sendMes = () => {
                        store.dispatch(addMessageActionCreator());
                    }
                    let onMessageChange = (message) => {
                        store.dispatch(updateNewMessageText(message));
                    }
                    return <Messages sendMes={sendMes}
                                     onMessageChange={onMessageChange}
                                     messagesPage={state}/>
                }
            }
        </StoreContext.Consumer>
    )
}
export default MessagesContainer;
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Messages from "./components/Messages/Messages";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              updateNewPostText={props.updateNewPostText}
                                                              addPost={props.addPost}/>}/>

                <Route path='/messages' render={() => <Messages messagesPage={props.state.messagesPage}
                                                                updateNewMessageText={props.updateNewMessageText}
                                                                addMessage={props.addMessage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/sidebar' render={() => <Sidebar state={props.state.sidebarPage}/>}/>
            </div>
        </div>);

}

export default App;
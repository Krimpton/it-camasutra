import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Messages from "./components/Messages/Messages";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>

                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/profile' component={Profile}/>
                    <Route exact path='/messages' component={Messages}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );


}


export default App;
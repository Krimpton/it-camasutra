import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesConstainer";
import SidebarContainer from "./components/Sidebar/FriendsList/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {Route, withRouter} from "react-router-dom";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";


class App extends Component {
    componentDidMount() { // компонента вмонтирована
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return  <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>

                    <Route path='/messages' render={() => <MessagesContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/sidebar' render={() => <SidebarContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>);

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
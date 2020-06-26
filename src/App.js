import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';

const App = () => {
  return ( <div className="app-wrapper">
      <Header />
  
      <Navbar />

      <Profile />
      
      </div>);
    
}


export default App;
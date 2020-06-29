import React from 'react';
import ss from './Header.module.css';


const Header = () => {
    return  <header className={ss.header}>
          <img className='header__icon' src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/16058550031557996972-512.png"/>
        </header>
}

export default Header;
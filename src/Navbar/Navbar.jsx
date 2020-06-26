import React from 'react';
import ss from '../Navbar/Navbar.module.css';

const Navbar = () => {
    return <nav className={ss.nav}>
    <div>
      <div className={ss.item}><a href="#">Profile</a></div>
      <div className={ss.item}><a href="#">Messages</a></div>
      <div className={ss.item}><a href="#">News</a></div>
      <div className={ss.item}><a href="#">Music</a></div>

      <div><a href="#">Settings</a></div>
    </div>

  </nav>
}

export default Navbar;









// let ss = {
//     'nav': 'Navbar_nav__2V62g',
//     'item': 'Navbar_item__1iiMU'
// }
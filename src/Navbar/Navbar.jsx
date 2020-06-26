import React from 'react';
import classes from '../Navbar/Navbar.module.css';


// let classes = {
//   'nav' : 'Navbar_nav__hlExj',
//   'item': 'Navbar_item__1akM'
// }
//
// let c1 = "item";
// let c2 = "active";
//
// let classes = c1 + " " + c2;
// let classesNew = `${classes.item} ${c2}`;

const Navbar = () => {
    return <nav className="Navbar_nav__2V62g">
    <div>
      <div className="item"><a href="#">Profile</a></div>
      <div className="item"><a href="#">Messages</a></div>
      <div className="item"><a href="#">News</a></div>
      <div className="item"><a href="#">Music</a></div>

      <div><a href="#">Settings</a></div>
    </div>

  </nav>
}

export default Navbar;
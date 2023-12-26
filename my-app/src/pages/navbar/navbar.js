// Navbar.js
import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <h2 className="logo">Menu Craft</h2>
      </div>
      <div className="menu">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/ingredients">INGREDIENTS</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
          <li><Link to="/contactus">CONTACT US</Link></li>
          {/* <li><Link to="/shop">SHOP</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

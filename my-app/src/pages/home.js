import React from 'react';
import Navbar from "./navbar";
import { Link } from 'react-router-dom';
import "../styles/home.css";
import backgroundImage from '../images/background.png'; // Adjust the path based on your folder structure
import "../styles/navbar.css";

function Home() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'wrap content', // Set your desired height
    // You can add more styles as needed
  };

  return (
    <div>
    <div className="main" style={containerStyle}>
      {/* <div className="navbar">
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
          </ul>
        </div>
      </div> */}
      <Navbar/>
      <div className="content">
        <h1>Welcome to<span>MenuCraft</span></h1>
        <p className="par">
          The ultimate dining experience!<br />
          Discover a delightful blend of chef-curated plates and the freedom to customize your own culinary masterpiece.<br />
          Explore preset options or craft a dish that suits your unique taste.<br />
          Your perfect meal, your way.
        </p>
        
      </div>
    </div>
    </div>
  );
}

export default Home;

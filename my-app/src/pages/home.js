import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/indes.css";
import backgroundImage from '../images/background.jpg'; // Adjust the path based on your folder structure

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
    <div className="main" style={containerStyle}>
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">HAWAT FOODY</h2>
        </div>
        <div className="menu">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/menu">MENU</Link></li>
            <li><Link to="/fruit">FRUITS</Link></li>
            <li><Link to="/login">LOGIN</Link></li>
            <li><Link to="/contactus">CONTACT US</Link></li>
          </ul>
        </div>
      </div>
      <div className="content">
        <h1>All kinds Of Fresh<br /><span>Vegetables & Fruits</span></h1>
        <p className="par">
          Our selection of fresh fruits and vegetables is vast,<br />
          and we ensure they are picked upon request and irrigated with pure water.<br />
          To maintain their delicious taste, we refrain from using hormones.<br />
          Additionally, we offer delivery to all regions.
        </p>
        
      </div>
    </div>
  );
}

export default Home;

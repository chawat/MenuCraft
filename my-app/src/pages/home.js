import React from 'react';
import "../styles/indes.css";
import backgroundImage from '../images/background.jpg'; // Adjust the path based on your folder structure


function home() {
    const containerStyle = {
        backgroundImage: 'url("background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '300px', // Set your desired height
        // You can add more styles as needed
      };
  return (
    <div className="main" style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5)50%,rgba(0,0,0,0.5)50%), url(${backgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '109vh' }}>
      <div className="navbar">
        <div className="icon">
          <h2 className="logo">HAWAT FOODY</h2>
        </div>
        <div className="menu">
          <ul>
            <li><a href="index.js">HOME</a></li>
            <li><a href="vegetable.js">VEGETABLES</a></li>
            <li><a href="fruit.js">FRUITS</a></li>
            <li><a href="Login.js">LOGIN</a></li>
            <li><a href="contact.js">CONTACT US</a></li>
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

export default home;

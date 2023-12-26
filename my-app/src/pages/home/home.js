import React from 'react';
import "./home.css";
import backgroundImage from "../../images/background.png"
// import "../styles/navbar.css";

function Home() {
  
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'wrap content', 
    
  };
  return (
    <div style={containerStyle}>
    <div className="main" >
      <div className="content">
      <p className="par">
          <h1>Welcome to<span>MenuCraft<br/></span></h1>
          
            <br/>The ultimate dining experience!<br />
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

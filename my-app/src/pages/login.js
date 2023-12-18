import React from "react";
import "../styles/login.css";
import backgroundImage from '../images/backghome.jpg';
import Navbar from "./navbar";

function Login() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'wrap content', // Set your desired height
    // You can add more styles as needed
  };
  const validate = () => {
    // Implement your validation logic here
    console.log("Validation logic goes here");
  };

  const handleCheckboxChange = () => {
    // Implement your checkbox change logic here
    console.log("Checkbox change logic goes here");
  };

  return (
    <div>
      <Navbar />
    <div className="form">
      <h1>LOGIN HERE</h1>
      <p>Username :</p>
      <input type="text" name="" placeholder="Name Here" />
      <p>Password :</p>
      <input type="password" name="" placeholder="Password Here" id="pass" />
      <input type="checkbox" onChange={handleCheckboxChange} />
      <input type="submit" name="" value="LOGIN" onClick={validate} />
      <p className="link">
        Don't have an account <br />
        <a href="#">Sign up </a>here
      </p>
      <p className="liw">Log in with</p>
      <div className="icons">
        <a href="www.facebook.com">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="www.instagram.com">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="www.twitter.com">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
        <a href="www.google.com.com">
          <ion-icon name="logo-google"></ion-icon>
        </a>
        <a href="www.skype.com">
          <ion-icon name="logo-skype"></ion-icon>
        </a>
      </div>
    </div>
    </div>
  );
}

export default Login;

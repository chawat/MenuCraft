import React, { useState } from "react";
import "../styles/login.css";
import { Link } from 'react-router-dom';
import backgroundImage from '../images/backghome.jpg';
import Navbar from "./navbar/navbar";
import Axios from 'axios';

function Login() {
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const submitR = () => {
    Axios.post('http://localhost:3001/api/insert', { name: name, password: password })
      .then(() => {
        alert('Successful insert');
      });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="form">
        <h1>LOGIN HERE</h1>
        <div>
          <label htmlFor="username">Username</label>
          <div>
            <input
              type="text"
              placeholder="Username"
              name="name"
              id="username"
              onChange={(e) => { setName(e.target.value); }}
            />

          </div>
        </div>
      <div>
          <label> Password</label>
            <div className="password-container">
                <input
                    type={isPasswordHidden ? "password" : "text"}
                    placeholder="Enter your password"
                    name="password"
                    className="w-full pr-12 pl-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    onChange={(e)=>{setPassword(e.target.value);}}

                />
                
                </div >
        </div >

      
        <Link to={{ pathname: '/menu', search: `?username=${name}` }} className="create-your-own-link">
  <input type="submit" name="" value="LOGIN" onClick={submitR} />
</Link>
      <p className="link">
        Don't have an account <br />
        <a href="#">Sign up </a>here
      </p>
      <p className="liw">Log in with</p>

      
    </div>
    </div>
  );
}

export default Login;




import React, { useState } from "react";

import './contactus.css';
import backgroundcont from "../../images/backMenu.jpg";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';
function ContactUs() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitR = () => {
    Axios.post('http://localhost:3001/api/contact', { name: name,  email: email, message:message })
      .then(() => {
        alert('Successful insert');
      });
  };
  
  const containerStylecon = {
    backgroundImage: `url(${backgroundcont})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    
  };
  return (
    <div style={containerStylecon} className='maincontact'>

    
    <div  className='formcontact'>
      
        <header>
          CONTACT US
        </header>

      <p>
        <label htmlFor="name">Name:</label>
      </p>
      <input type="text" id="name" name="name" placeholder="Name"       onChange={(e) => { setName(e.target.value); }}
required />

      <p>
        <label htmlFor="email">Email:</label>
      </p>
      <input type="email" id="email" name="email" 
      placeholder="info@example.com" required 
      onChange={(e) => { setEmail(e.target.value); }}
      />

      <p>
        <label htmlFor="message">Message:</label>
      </p>
      <textarea id="message" name="message" placeholder="Your message"
       required       onChange={(e) => { setMessage(e.target.value); }}
       ></textarea>

<Link to={{ pathname: '/' }} className="create-your-own-link">
  <input type="submit" name="" value="SEND" onClick={submitR} />
</Link>

       
      
    </div>
    </div>
  );
}

export default ContactUs;
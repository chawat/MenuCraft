import React from 'react';
import Form from './form';
import '../styles/contactus.css';
import Navbar from "./navbar";

function ContactUs() {
  return (
    <div>

    <Navbar/>
    <div>
      <header>
        <h1>CONTACT US</h1>
      </header>

      <Form />

      <footer></footer>
    </div>
    </div>
  );
}

export default ContactUs;

import React from 'react';
import Form from './form';
import '../styles/contactus.css';
import Navbar from "./navbar/navbar";

function ContactUs() {
  return (
    <div>
      {/* <Navbar /> */}
      <div>
        <header>
          CONTACT US
        </header>

        <Form />

        <footer></footer>
      </div>
    </div>
  );
}

export default ContactUs;
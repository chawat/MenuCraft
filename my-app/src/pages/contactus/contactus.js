import React from 'react';
import './contactus.css';
import backgroundcont from "../../images/backMenu.jpg";
function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
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

        {/* <form onSubmit={handleSubmit}> */}
      <p>
        <label htmlFor="name">Name:</label>
      </p>
      <input type="text" id="name" name="name" placeholder="Name" required />

      <p>
        <label htmlFor="email">Email:</label>
      </p>
      <input type="email" id="email" name="email" placeholder="info@example.com" required />

      <p>
        <label htmlFor="message">Message:</label>
      </p>
      <textarea id="message" name="message" placeholder="Your message" required></textarea>

      <button type="submit" onSubmit={handleSubmit}>Submit</button>
      {/* <p>
        Or Contact us directly <a href="mailto:Chalitahawat1@gmail.com">HAWAT@gmail.com</a>
      </p> */}
    {/* </form> */}

       
      
    </div>
    </div>
  );
}

export default ContactUs;
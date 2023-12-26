import React from 'react';
import './addyouritem.css';
import  { useState } from 'react';
function Addtomenu() {
  return (
    <div>

    
    <div>
      <header>
        <h1>ADD YOUR ITEM TO MENU</h1>
      </header>
      <form >
      <p>
        <label>Recipe Name:</label>
      </p>
      <input 
      type="text" 
      placeholder="Type your recipe name here" 
      required 
      />
      <p><label>Recipe Number</label></p>
    
      <input 
      type="text" 
      placeholder="description" 
      required />
      
      <p>
        <label>Description:</label>
      </p>
      <input 
      type="text" 
      placeholder="description" 
      required />
      <p>
        
        <label htmlFor="email">Email:</label>
      </p>
      <input type="email" id="email" name="email" placeholder="info@example.com" required />

      <p>
        <label htmlFor="message">Comment:</label>
      </p>
    <textarea id="message" name="message" placeholder="Your message" required></textarea> 

      <button type="submit">Add To Menu</button>
    </form>
      

      <footer></footer>
    </div>
    </div>
  );
}

export default Addtomenu;

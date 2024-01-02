import React from 'react';
import './addyouritem.css';
import  { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';

function Addtomenu() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');
  console.log(username);
  const submitR = () => {
    Axios.post('http://localhost:3001/api/addToMenu', { name: name, username:username, email: email, description:description })
      .then(() => {
        alert('Successful insert');
      });
  };
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
      onChange={(e) => { setName(e.target.value); }}
      />
    
      
      <p>
        <label>Description:</label>
      </p>
      <input 
      type="text" 
      placeholder="description" 
      required 
      onChange={(e) => { setDescription(e.target.value); }}/>
      <p>
        
        <label htmlFor="email">Email:</label>
      </p>
      <input type="email" id="email" name="email" placeholder="info@example.com" required 
      onChange={(e) => { setEmail(e.target.value); }}/>

     


      <Link to={{ pathname: '/ingredients', search: `?username=${username}` }} className='create-your-own-link'>
              <input type='submit' onClick={submitR} value={'Add To Menu'} />
            </Link>
    </form>
      

      <footer></footer>
    </div>
    </div>
  );
}

export default Addtomenu;

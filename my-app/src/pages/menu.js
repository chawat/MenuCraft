// Vegetables.js

import React from 'react';
 import "../styles/menu.css";
import Navbar from "./navbar";
import backgroundImage from '../images/backMenu.jpg';
import { Link } from 'react-router-dom';

import { ProductsMenu } from './productsMenu';


function Menu() {

  const containerStyle = {
    
    backgroundImage: `url(${backgroundImage})`,
    // backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'wrap content', // Set your desired height
    // You can add more styles as needed
  };
  return (<div>
    <Navbar/>
    <form method="post" action="chalitahawat1@gmail.com">
      <input type="hidden" name="recipient" value="chalitahawat1@gmail.com" />

      <div className="wrapper">
        <h1 className="header">All Menu</h1>
      </div>
      <div className='main-body'>
        <div className='content'>

          {ProductsMenu.map((item, index) => (
            <div key={index}>
              <img className='c1' src={item.image} alt={item.name} />
              <p>
                {item.name} {item.price}$ <br />
                <label>
                  
                  <input
                    type="number"
                    name="weight" 
                    min="0"
                    max="100"
                    step="1"
                    defaultValue="0" 
                  />
                </label>
                <button>Add</button>
              </p>
              
            </div>
          ))}
        </div>
      </div>
     
<div className="footer">
  <p>
    <input type="reset" value="Clear"  />
    <input type="submit" value="Submit"  />
    <Link to="/ingredients" className="create-your-own-link">
      <input type="submit" value="Create your own!" />
    </Link>
  </p>
</div>



    </form>
    </div>
  );
}

export default Menu;

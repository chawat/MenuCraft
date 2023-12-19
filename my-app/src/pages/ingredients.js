// Vegetables.js

import React from 'react';
import "../styles/menu.css";
import Navbar from "./navbar";
import Ketchup from '../images/ketchup.jpg';
import Honey from '../images/honey.jpg';
import Lettuce from '../images/lettuce.jpg';
import Cheese from '../images/cheese.jpg';
import Bacon from '../images/bacon.jpg';
import CheeseDip from '../images/CheeseDip.jpg';
import Meat from '../images/meat.jpg';
import Tomato from '../images/tomato.jpg';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/ingredients.css";

function Ingredients() {
  const navigate = useNavigate();

  const handleAddButtonClick = (item) => {
    navigate('/ChosenItems', { state: { selectedItem: item } });
  }

  const changePathButton = () =>{
    navigate('ChosenItems');
  }

  const ingredientsData = [
    { name: 'Ketchup', price: 4.5, image: Ketchup },
    { name: 'CheeseDip', price: 4.5, image: CheeseDip },
    { name: 'Bacon', price: 4.5, image: Bacon },
    { name: 'ClubSandwich', price: 4.5, image: Meat },
    { name: 'ClubSandwich', price: 4.5, image: Cheese },
    { name: 'ClubSandwich', price: 4.5, image: Lettuce },
    { name: 'ClubSandwich', price: 4.5, image: Tomato },
    { name: 'ClubSandwich', price: 4.5, image: Honey },
  ];


  return (
    
  <div>
    <Navbar/>
   
    <div className='main-body'>
      <div className='content'>
        {ingredientsData.map((item,index) =>(
          <div key={index}>
            <img className='c1' src={item.image} alt={item.name} />
            <p>
              {item.name} {item.price}$ <br />
              <label>
                <input
                  type='number'
                  name={'weight_${index}'}
                  min="0"
                  max="100"
                  step="1"
                  defaultValue="0"
                />
              </label>
              <button onClick={() => handleAddButtonClick(item)}>Add</button>
            </p>
             </div>
        ))}
         
      </div>
    </div>
    <div class="container">
    {/* <button onClick={changePathButton} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Check</button>
    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"><Link to="/addtomenu" className="create-your-own-link">
      <input type="submit" value="Add To Menu!" />
    </Link>
    </button> */}
     <form method="post" action="chalitahawat1@gmail.com">
      <input type="hidden" name="recipient" value="chalitahawat1@gmail.com" />
    
    <p>
    <input type="reset" value="Clear"  />
    <input type="submit" value="Submit"  />
    <Link to="/addtomenu" className="create-your-own-link">
      <input type="submit" value="Add To Menu!" />
    </Link>
  </p>
  </form>
    </div>
    
    
    </div>
  );
}

export default Ingredients;

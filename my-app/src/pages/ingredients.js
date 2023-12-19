// Vegetables.js

import React from 'react';
import "../styles/menu.css";
import Navbar from "./navbar";
import VegetableItem from './vegetableitem';
import Ketchup from '../images/ketchup.jpg';
import backgroundImage from '../images/backMenu.jpg';
import Honey from '../images/honey.jpg';
import Lettuce from '../images/lettuce.jpg';
import Cheese from '../images/cheese.jpg';
import Bacon from '../images/bacon.jpg';
import CheeseDip from '../images/CheeseDip.jpg';
import Meat from '../images/meat.jpg';
import Tomato from '../images/tomato.jpg';
import { Link } from 'react-router-dom';




function Ingredients() {
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
        <h1 className="header">All Ingredients</h1>
      </div>
      <div className="main-body">
        <div className="content">
        <img className="c1" src={Ketchup} alt="Tomato" />

<p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>
<img className="c1" src={CheeseDip} alt="Tomato" />

<p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>
<img className="c1" src={Bacon} alt="Tomato" />

<p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>

          {/* Your vegetable images and details */}
        </div>
        <div className="left">
        <img className="c1" src={Meat} alt="Tomato" />

        <p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>
<img className="c1" src={Cheese} alt="Tomato" />

<p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>
<img className="c1" src={Lettuce} alt="Tomato" />

<p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>
          {/* More vegetable images and details */}
        </div>
        <div className="right">
        <img className="c1" src={Honey} alt="Tomato" />

        <p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>
<img className="c1" src={Tomato} alt="Tomato" />

<p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>
<img className="c1" src={Tomato} alt="Tomato" />

<p>
  ClubSandwich     4.5$ <br />
  {/* <input name="ClubSandwich" type="radio" /> */}
  <label>
  {/* Weight: */}
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
</p>
          {/* Additional vegetable images and details */}
        </div>
      </div>
      <div className="footer">
  <p>
    <input type="reset" value="Clear"  />
    <input type="submit" value="Submit"  />
    <Link to="/addtomenu" className="create-your-own-link">
      <input type="submit" value="Add To Menu!" />
    </Link>
  </p>
</div>
    </form>
    </div>
  );
}

export default Ingredients;

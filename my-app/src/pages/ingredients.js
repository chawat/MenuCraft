// Vegetables.js

import React from 'react';
import "../styles/menu.css";
import Navbar from "./navbar";
import VegetableItem from './vegetableitem';
import Tomato from '../images/ClubSandwich.jpg';
import backgroundImage from '../images/backMenu.jpg';

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
        <h1 className="header">All Menu</h1>
      </div>
      <div className="main-body">
        <div className="content">
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

          {/* Your vegetable images and details */}
        </div>
        <div className="left">
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
          {/* More vegetable images and details */}
        </div>
        <div className="right">
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
          <input type="reset" value="Clear" />
          <input type="submit" value="Submit" />
        </p>
      </div>
    </form>
    </div>
  );
}

export default Ingredients;

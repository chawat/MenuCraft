// Vegetables.js

import React from 'react';
import "../styles/menu.css";
import Navbar from "./navbar";
import VegetableItem from './vegetableitem';
import Tomato from '../images/ClubSandwich.jpg';
import backgroundImage from '../images/backMenu.jpg';
import { Link } from 'react-router-dom';

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
      {/* <div className="footer">
        <p>
          <input type="reset" value="Clear" />
          <input type="submit" value="Submit" />
          <ul><li><Link to="/ingredients"> <input type="submit" value="Create your own!" /></Link></li></ul>
        </p>
      </div> */}
      {/* <div className="footer">
  <p>
    <input type="reset" value="Clear" style={{ marginRight: '10px' }} />
    <input type="submit" value="Submit" style={{ marginRight: '10px' }} />
    <ul style={{ display: 'inline-block' }}>
      <li>
        <Link to="/ingredients">
          <input type="submit" value="Create your own!" />
        </Link>
      </li>
    </ul>
  </p>
</div> */}
{/* <div className="footer">
  <p>
    <input type="reset" value="Clear" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
    <input type="submit" value="Submit" style={{ marginRight: '10px', verticalAlign: 'middle' }} />
    <ul style={{ display: 'inline-block', verticalAlign: 'middle', margin: 0 }}>
      <li>
        <Link to="/ingredients">
          <input type="submit" value="Create your own!" />
        </Link>
      </li>
    </ul>
  </p>
</div> */}
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

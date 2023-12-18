// Vegetables.js

import React from 'react';
import "../styles/menu.css";
import VegetableItem from './vegetableitem';
import Tomato from '../images/tomato.jpg';

function Menu() {
  return (
    <form method="post" action="chalitahawat1@gmail.com">
      <input type="hidden" name="recipient" value="chalitahawat1@gmail.com" />

      <div className="wrapper">
        <h1 className="header">VEGETABLES</h1>
      </div>
      <div className="main-body">
        <div className="content">
        <img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
</p>
<img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
</p>
<img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
</p>

          {/* Your vegetable images and details */}
        </div>
        <div className="left">
        <img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
</p>
<img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
</p>
<img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
</p>
          {/* More vegetable images and details */}
        </div>
        <div className="right">
        <img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
</p>
<img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
</p>
<img className="c1" src={Tomato} alt="Tomato" />

<p>
  Tomato (price in kg $2) <br />
  <input name="Tomato" type="radio" />
  <label>
  Weight:
  <input
    type="number"
    name="weight" 
    min="0"
    max="100"
    step="1"
    defaultValue="0" 
  />
</label>
  (kg)
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
  );
}

export default Menu;

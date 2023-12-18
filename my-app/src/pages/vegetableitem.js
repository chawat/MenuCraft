import React from 'react';
function VegetableItem({ name, price }) {
    return (
      <div>
        <img className="c1" URL={`../images/${name}.jpg`} alt={name} width="300" height="225" />

        <p>
          {name} (price in kg {price}$) <br />
          <input name={name} type="radio" />
          <label>
            weight:
            <input type="number" min="0" max="100" step="1" value="0" />
          </label>
          (kg)
        </p>
      </div>
    );
  }
  
  export default VegetableItem;
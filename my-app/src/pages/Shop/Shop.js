
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';

function Shop() {
  const location = useLocation();
  const [ingList, setIngList] = useState([]);
  const name = new URLSearchParams(location.search).get('name');
  console.log(name);
  const submitR = () => {
    Axios.post('http://localhost:3001/api/setOrdered', { username: name })
      .then(() => {
        alert('Successful insert');
      });
  };
  useEffect(() => {
    Axios.post('http://localhost:3001/api/orderItems', { name }).then((response) => {
      setList(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    Axios.post('http://localhost:3001/api/orderItemsIngredients', { name }).then((response) => {
      setIngList(response.data);
      console.log(response.data);
    });
  }, []);

  const handleFormSubmit = async (e) => {
    // Add form submission logic here if needed
  };

  const [menuList, setList] = useState([]);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
      <h1>order from menu</h1>
        {menuList.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - Quantity: {item.quantity} - Total Price: ${item.price * item.quantity} <br />
            </p>
          </div>
        ))}
        <br/>
<h1>order from ingredient</h1>
{ingList.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - Quantity: {item.quantity*item.qu}g - Total Price: ${item.price * item.quantity}-   number: {item.number} <br />
            </p>
          </div>
        ))}
        <br/>
        <div className="footer">
          <p>
          <Link to={{ pathname: '/' }} className="create-your-own-link">
  <input type="submit" value="Submit" onClick={submitR} />
  </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Shop;


import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';
import "./shop.css";
function Shop() {
  const location = useLocation();
  const [menuList, setList] = useState([]);

  const [ingList, setIngList] = useState([]);
  const name = new URLSearchParams(location.search).get('name');
  console.log(name);
  const [total, setTotal] = useState(0);
  const [total2, setTotal2] = useState(0);
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
    // Calculate the total whenever menuList changes
    const newTotal = menuList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  }, [menuList]);

  useEffect(() => {
    Axios.post('http://localhost:3001/api/orderItemsIngredients', { name }).then((response) => {
      setIngList(response.data);
      console.log(response.data);
    });
  }, []);
    useEffect(() => {
    // Calculate the total whenever menuList changes
    const newTotal = ingList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal2(newTotal);
  }, [ingList]);

  const handleFormSubmit = async (e) => {
    // Add form submission logic here if needed
  };


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
        Total From Menu: ${total}
        <br/>
<h1>order from ingredient</h1>
{ingList.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - Quantity: {item.quantity*item.qu}g - Total Price: ${item.price * item.quantity}-   number: {item.number} <br />
            </p>
          </div>
        ))}
        Total From Ingredient: ${total2}
        <br/>
        <div className="footer">
        Total: ${total+total2}
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

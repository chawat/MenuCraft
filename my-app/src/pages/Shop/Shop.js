
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Axios from 'axios';

function Shop() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');
  console.log(name);

  useEffect(() => {
    Axios.post('http://localhost:3001/api/orderItems', { name }).then((response) => {
      setList(response.data);
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
        {menuList.map((item, index) => (
          <div key={index}>
            <p>
              {item.name} - Quantity: {item.quantity} - Total Price: ${item.price * item.quantity} <br />
            </p>
          </div>
        ))}
        <div className="footer">
          <p>
            <input type="submit" value="Submit" />
          </p>
        </div>
      </form>
    </div>
  );
}

export default Shop;

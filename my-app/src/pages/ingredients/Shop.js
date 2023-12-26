import React, { useEffect, useState } from 'react';

import Navbar from "../navbar";

import { Link } from 'react-router-dom';


import Axios from 'axios';
import { useLocation } from 'react-router-dom';




  


  
  

function Shop() {
  
  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');
  console.log(name);
  useEffect(()=>{
    Axios.post('http://localhost:3001/api/orderItems', {name }).then((response)=>{
      setList(response.data);
      console.log(response.data);
    });
  }, []);

  const handleFormSubmit = async (e) => {
    
  };
  const [menuList, setList]= useState([]);

  return (<div>

    <Navbar/>
    
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
    
    <input type="submit" value="Submit"  />
    
  </p>
</div>



    </form>
    </div>
  );
}

export default Shop;

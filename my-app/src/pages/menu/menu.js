import React, { useEffect, useState } from 'react';
import "./menu.css";
// import backgroundImage from '../images/backMenu.jpg';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
 import ClubSandwich from '../../images/ClubSandwich.jpg';
// import Subs from '../images/Subs.jpg'
// import HotDog from '../images/HotDogs.jpg'
// import ChickenSandwich from '../images/chickenSandwich.jpg'
// import SwissMushroom from '../images/swissMushroom.jpg'
// import Hamburger from '../images/hamburger.jpg'
import Axios from 'axios';
import { useLocation } from 'react-router-dom';
import backgroundmenu from "../../images/backMenu.jpg";


  

function Menu() {
  
  const location = useLocation();
  const [name, setName] = useState('');
  const username = new URLSearchParams(location.search).get('username');
  
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setList(response.data);
      console.log(response.data);
    });
  }, []);

 
  

  const [order, setOrder] = useState([]);

  const handleAddToOrder = (item, quantity) => {
    setOrder((prevOrder) => {
      const existingItemIndex = prevOrder.findIndex((orderItem) => orderItem.idmenu === item.idmenu);
      console.log(existingItemIndex);
      if (existingItemIndex !== -1) {
        prevOrder[existingItemIndex].quantity = quantity;
        return [...prevOrder];
      } else {
        return [...prevOrder, { ...item, quantity }];
      }
    });
  };
  const containerStylemenu = {
    backgroundImage: `url(${backgroundmenu})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    
  };
  const handleFormSubmit = () => {
    

    try {
      // Send the order to the server
      Axios.post('http://localhost:3001/api/addOrder', { order, username });
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };
  const handleFormClear = () => {
    

    setOrder([]);
  };
  const [menuList, setList]= useState([]);
  // const containerStyle = {
    
  //   backgroundImage: `url(${backgroundImage})`,
    
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  //   height: 'wrap content', 
  // };
  return (
    <div style={containerStylemenu} className='mainmenu' >
    <form  >
  
    <h1>Welcome to the Menu, {username}!</h1> 
    
    setName(username);
      <input type="hidden" name="recipient" value="chalitahawat1@gmail.com" />
      console.log(name)
       <div className="wrapper"> 
        <h1 className="header">All Menu</h1>
      </div> 
      <div className='main-body'>
        <div className='content'>

          {menuList.map((item, index) => (
            <div key={index}>
            <img src={item.image} alt={item.name} />
            {/* <img className='c1' src={require(`../images/${item.image}`).default} alt={item.name} /> */}

             <p>
                {item.name} {item.price}$ <br />
                <label>
                  
                <input
                type="number"
                name={`quantity_${item.idmenu}`}
                min="0"
                max="100"
                step="1"
                defaultValue={0}
                onChange={(e) => handleAddToOrder(item, parseInt(e.target.value, 10))}
                />
                </label>
              </p>
              
            </div>
          ))}
        </div>
      </div>
     
<div className="footermenu">
  <p>
    console.log(name)
    <input type="reset" value="Clear" onClick={handleFormClear} />
    
<Link to={{ pathname: '/Shop', search: `?name=${username}` }} className="create-your-own-link">
<input type="submit"  value="addToCart" onClick={handleFormSubmit}/>
</Link>
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

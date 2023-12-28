import React, { useEffect,useState } from 'react';
import './ingredients.css';
import Navbar from '../navbar/navbar';
import { PRODUCTS } from '../productsIng';
import  '../../images/ketchup.jpg'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Axios from 'axios';
import backgroundmenu from "../../images/backMenu.jpg";


function Ingredients() {
  const location = useLocation();
  const username = new URLSearchParams(location.search).get('username');


  useEffect(()=>{
    Axios.get('http://localhost:3001/api/getIngredient').then((response)=>{
      setList(response.data);
      console.log(response.data);
    });
  }, []);


  const [order, setOrder] = useState([]);
  const [number, setNumber] = useState(0);


  const handleAddToOrder = (item, quantity) => {
    setOrder((prevOrder) => {
      const existingItemIndex = prevOrder.findIndex((orderItem) => orderItem.idingredient === item.idingredient);
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
      Axios.post('http://localhost:3001/api/addOrderIngredient', { order, username, number });
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };
  const handleFormClear = () => {
    

    setOrder([]);
  };

  

  const [ingredientList, setList]= useState([]);
  const navigate = useNavigate();
  const [renderCount, setRenderCount] = useState(0);

  function handleAddButtonClick() {
    setRenderCount(renderCount + 1);
    // Add your logic for navigating or other actions
  }

  const changePathButton = () => {
    navigate('ChosenItems');
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

   
  const containerStyle = {
    backgroundImage: `url(${backgroundmenu})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    
  };
  return (
    <div style={containerStyle} className='mainingredient'>
      {/* <Navbar /> */}
      <form >

      <div className='main-body'>
        <div className='content'>

          {ingredientList.map((item, index) => (
            <div key={index}>
              <img className='c1' src={item.image} alt={item.name} />
              <p>
                {item.name} {item.quantity} {item.price}$ <br />
                <label>
                  
                <input
                type="number"
                name={`quantity_${item.idingredient}`}
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



      <div className='container'>
        

          <p>
            <p>number of sandwish(should be unique)<input type='number' name ='number' onChange={(e) => { setNumber(e.target.value); }}/></p>
            <input type='reset' value='Clear' onClick={handleFormClear}/>
            <Link to={{ pathname: '/ingredients', search: `?username=${username}` }} className="create-your-own-link">
            <input type='reset' value='Save and create another sandwish' onClick={handleFormSubmit}/>
            </Link>
            <Link to={{ pathname: '/Shop', search: `?name=${username}` }} className="create-your-own-link">
            <input type='submit' value='Submit' onClick={handleFormSubmit} />
            </Link>
            <Link to='/addtomenu' className='create-your-own-link'>
              <input type='submit' value='Add To Menu!' />
            </Link>
          </p>
        
      </div>
      </form>
    </div>
  );
}

export default Ingredients;
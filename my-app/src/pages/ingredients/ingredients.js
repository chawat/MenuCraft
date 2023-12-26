import React, { useEffect,useState } from 'react';
import './ingredients.css';
import Navbar from '../navbar/navbar';
import { PRODUCTS } from '../productsIng';
import  '../../images/ketchup.jpg'; 
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import backgroundmenu from "../../images/backMenu.jpg";


function Ingredients() {
  useEffect(()=>{
    Axios.get('http://localhost:3001/api/getIngredient').then((response)=>{
      setList(response.data);
      console.log(response.data);
    });
  }, []);

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

   /* const ingredientsData = [
    { name: 'Ketchup', price: 4.5, image: Ketchup },
    { name: 'CheeseDip', price: 4.5, image: CheeseDip },
    { name: 'Bacon', price: 4.5, image: Bacon },
    { name: 'ClubSandwich', price: 4.5, image: Meat },
    { name: 'ClubSandwich', price: 4.5, image: Cheese },
    { name: 'ClubSandwich', price: 4.5, image: Lettuce },
    { name: 'ClubSandwich', price: 4.5, image: Tomato },
    { name: 'ClubSandwich', price: 4.5, image: Honey },
  ];*/
  const containerStyle = {
    backgroundImage: `url(${backgroundmenu})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    
  };
  return (
    <div style={containerStyle} className='mainingredient'>
      {/* <Navbar /> */}
      <form method='post' action='chalitahawat1@gmail.com'>
          <input type='hidden' name='recipient' value='chalitahawat1@gmail.com' />

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
                    name="weight" 
                    min="0"
                    max="100"
                    step="1"
                    defaultValue="0" 
                  />
                </label>
               
              </p>
              
            </div>
          ))}
        </div>
      </div>



      <div className='container'>
        

          <p>
            <input type='reset' value='Clear' />
            <input type='submit' value='Submit' />
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
import React, { useState } from 'react';
import '../styles/menu.css';
import Navbar from './navbar';
import Ketchup from '../images/ketchup.jpg';
import Honey from '../images/honey.jpg';
import Lettuce from '../images/lettuce.jpg';
import Cheese from '../images/cheese.jpg';
import Bacon from '../images/bacon.jpg';
import CheeseDip from '../images/CheeseDip.jpg';
import Meat from '../images/meat.jpg';
import Tomato from '../images/tomato.jpg';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ingredients.css';

function Ingredients() {
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

  const ingredientsData = [
    { name: 'Ketchup', price: 4.5, image: Ketchup },
    { name: 'CheeseDip', price: 4.5, image: CheeseDip },
    { name: 'Bacon', price: 4.5, image: Bacon },
    { name: 'ClubSandwich', price: 4.5, image: Meat },
    { name: 'ClubSandwich', price: 4.5, image: Cheese },
    { name: 'ClubSandwich', price: 4.5, image: Lettuce },
    { name: 'ClubSandwich', price: 4.5, image: Tomato },
    { name: 'ClubSandwich', price: 4.5, image: Honey },
  ];

  return (
    <div>
      <Navbar />
      <form method='post' action='chalitahawat1@gmail.com'>
          <input type='hidden' name='recipient' value='chalitahawat1@gmail.com' />
      <div className='main-body'>
        <div className='content'>
          {ingredientsData.map((item, index) => (
            <div key={index}>
              <img className='c1' src={item.image} alt={item.name} />
              <p>
                {item.name} {item.price}$ <br />
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
                
                {/* <button onClick={() => { handleAddButtonClick(); }}>Add</button> */}
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

          <div>
            {/* Display the count */}
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">
                {renderCount}
              </span>
              <button className="btn">inbox</button>
            </div>

            {/* Button to open the modal */}
            <button className='btn' onClick={openModal}>
              Open Modal
            </button>

            {/* Modal */}
            {isModalOpen && (
              <div className='modal-overlay'>
                <div className='modal-box'>
                  <h3 className='font-bold text-lg'>Hello!</h3>
                  <p className='py-4'>Press ESC key or click the button below to close</p>
                  <div className='modal-action'>
                    {/* Close button */}
                    <button className='btn' onClick={closeModal}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        
      </div>
      </form>
    </div>
  );
}

export default Ingredients;

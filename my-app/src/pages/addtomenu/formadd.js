import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Formadd = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); //for the page to refresh 
    const blog = { recipeName, description, serving};

    console.log(blog);
  };

   const goToIngredients =() => {
    /* fetch(
       '../ingredients.js',
      {
          method:'POST',
          body:JSON.stringify(),
          headers:{
              'Content-Type':'application/json',
          },
      }
  ).then(() =>{
      navigate.replace('/');
  }); */
  } 

  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [serving, setServing]=useState('1');

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Recipe Name:</label>
      </p>
      <input 
      type="text" 
      placeholder="Type your recipe name here" 
      required 
      value={recipeName}
      onChange={(e) => setRecipeName(e.target.value)}
      />
      {/* <p>
        <label htmlFor="name">Name Of Your Item:</label>
      </p>
      <input type="text" id="name" name="name" placeholder="Name" required /> */}
      <label>Ingredients</label>
      <button onClick={goToIngredients}>+ Add ingredients to recipe</button>
      
      <p>
        <label>Description:</label>
      </p>
      <input 
      type="text" 
      placeholder="description" 
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required />

      <label>Serving Size</label>
      <select 
        value={serving} 
        onChange={(e)=>setServing(e.target.value)}
        >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <button type="submit">Add To Menu</button>
    </form>
    );
      

      {/* <p>
        
        <label htmlFor="email">Email:</label>
      </p>
      <input type="email" id="email" name="email" placeholder="info@example.com" required />

      <p>
        <label htmlFor="message">Comment:</label>
      </p>
    <textarea id="message" name="message" placeholder="Your message" required></textarea> */}

      
  
}

export default Formadd;

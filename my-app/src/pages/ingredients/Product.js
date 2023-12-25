import React, { useContext } from 'react'
import "./shop.css"
import { ShopContext } from '../../context/shopContext';

const Product = (props) => {
    const { id, name, price, image } = props.data;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='product'> 
    <img src={image}/>
    <div className='name'>
      <p> <b> {name} </b> </p>
      <p> $ {price} </p>
    </div>
      <button className='addTo' onClick={() => addToCart(id)}>
        Add 
      </button>
      
    </div>
  )
}

export default Product
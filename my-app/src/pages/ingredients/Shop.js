import React from 'react'
import { PRODUCTS } from '../productsIng';
import {Product} from './Product';
import './shop.css';

function Shop() {
  return (
    <div className='shop'>
        <div className='shopTitle'>
            <h1>Ingredients shop</h1>
        </div>
      <div className='products'>
        {PRODUCTS.map((Product) =>(
            <Product key={Product.id} data={Product}/>
        ))}
      </div>
    </div>
  );
};

export default Shop

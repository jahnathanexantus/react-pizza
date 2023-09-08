import React from 'react';
import './toppings.css'

const ToppingsItem = ({ name, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(name, price);
  };

  return (
    <div className='toppings__scroll-container'>
      <div className='toppings__list'>
        <div className='toppings__name'>{name}</div>
        <p>{price}</p>
        <button className='toppings__button' onClick={handleAddToCart}>Choose</button>
      </div>
    </div>
  );
};

export default ToppingsItem;

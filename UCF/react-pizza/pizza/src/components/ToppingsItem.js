import React from 'react';

const ToppingsItem = ({ name, price, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(name, price);
  };

  return (
    <div>
      <div className='toppings__name'>{name}</div>
      <p>{price}</p>
      <button onClick={handleAddToCart}>Choose</button>
    </div>
  );
};

export default ToppingsItem;

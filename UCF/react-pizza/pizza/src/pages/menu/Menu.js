import React, { useState } from "react";
import { toppings } from "../../options";
import ToppingsItem from "../../components/ToppingsItem";
import './menu.css';


import { calculateTotal } from "./calculateTotal"; 

const Menu = () => {
  const [cart, setCart] = useState([]);

  
  const total = calculateTotal(cart.map(item => item.price));

  const addToCart = (name, price) => {
    const newItem = { name, price };
    setCart([...cart, newItem]);
  };

  const order = () => {
    alert("Thank you for shopping with us! Your order has been placed.");
    setCart([]);
  };

  const reset = () => {
    setCart([]);
  };

  return (
    <div className="menu__container">
      <h1 className="section__title">
        You <span>Pick</span>
        <div className="cart__buttons">
        <button className='toppings__button' onClick={order}>Order</button>
        <button className='toppings__button' onClick={reset}>Reset</button>
      </div>
      </h1>

      <div className="toppin__cart-container">
        <div className="toppings__container">
          <h1>Toppings</h1>
          {toppings.map((item) => (
            <ToppingsItem key={item.id} {...item} addToCart={addToCart} />
          ))}
        </div>

        <div className="cart__container">
          <h1>Cart</h1>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p>Total Price: ${total.toFixed(2)}</p> 
        </div>
      </div>

      
    </div>
  );
};

export default Menu;

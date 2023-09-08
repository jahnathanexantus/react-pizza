import React, { useState } from "react";
import { toppings } from "../../options";
import ToppingsItem from "../../components/ToppingsItem.js";

const Menu = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (name, price) => {
    const newItem = { name, price };
    setCart([...cart, newItem]);
    };

    return (
    <div>
        <h1 className="section__title">
        You <span>Pick</span>
        </h1>

        <div className="toppin__cart-container">
        <div className="toppings__container">
            {toppings.map((item) => (
            <ToppingsItem key={item.id} {...item} addToCart={addToCart} />
            ))}
        </div>

        <div className="cart__container">
            <h2>Cart</h2>
            <ul>
            {cart.map((item, index) => (
                <li key={index}>
                {item.name} - ${item.price}
                </li>
            ))}
            </ul>
        </div>
        </div>
    </div>
    );
};

export default Menu;

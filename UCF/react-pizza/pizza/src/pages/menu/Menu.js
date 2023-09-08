import React, { useState } from "react";
import { toppings } from "../../options";
import ToppingsItem from "../../components/ToppingsItem";
import './menu.css'

const Menu = () => {
    const [cart, setCart] = useState([]);


    const addToCart = (name, price) => {
    const newItem = { name, price };
    setCart([...cart, newItem]);
    };

    return (
    <div className="menu__container">
        <h1 className="section__title">
        You <span>Pick</span>
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
        </div>
        </div>
    </div>
    );
};

export default Menu;

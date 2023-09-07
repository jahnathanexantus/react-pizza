import React from "react";
import { toppings } from "../../options";
import ToppingsItem from '../../components/ToppingsItem.js'

const Menu = () => {
  return (
   <div>
    <h1 className="section__title">You <span>Pick</span></h1>


    <div className="toppin__cart-container">
        <div className="toppings__container">
            {toppings.map((item)=>{
                return <ToppingsItem key={item.id} {...item}/>
            })}
        </div>
        <div className="cart__container"></div>
    </div>
   </div>
  );
};

export default Menu;

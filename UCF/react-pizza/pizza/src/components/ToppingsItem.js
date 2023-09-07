import React from 'react';
import { toppings } from '../options';


const toppingsItem = ({name,price},index) => {
  return (
    <div className="stats__box" key={index}>
        <h3 className="stats__no">{name}</h3>
        <p className="stats__title">{price}</p>
      </div>
  );
}

export default toppingsItem;

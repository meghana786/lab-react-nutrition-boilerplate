import React, { useState } from 'react';
import '../App.css';

const FoodBox = ({ food, addFood }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="box">
      <figure className="image">
        <img src={food.img} alt={food.name} />
      </figure>
      <div className="media-content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.cal} cal</small>
        </p>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </div>
          <div className="control">
            <button className="button is-info" onClick={() => addFood(food, quantity)}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodBox;

import React, { useState } from 'react';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import foods from './resources/FoodData';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFoods, setSelectedFoods] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const addFood = (food, quantity) => {
    const newFood = {
      ...food,
      quantity: parseInt(quantity),
      totalCalories: parseInt(quantity) * food.cal,
    };

    const foodIndex = selectedFoods.findIndex(f => f.name === newFood.name);
    if (foodIndex >= 0) {
      const updatedFoods = selectedFoods.map((f, index) =>
        index === foodIndex
          ? { ...f, quantity: f.quantity + newFood.quantity, totalCalories: f.totalCalories + newFood.totalCalories }
          : f
      );
      setSelectedFoods(updatedFoods);
    } else {
      setSelectedFoods([...selectedFoods, newFood]);
    }
  };

  const resetFood = (foodName) => {
    setSelectedFoods(selectedFoods.filter(food => food.name !== foodName));
  };

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Search handleSearch={handleSearch} />
      <div>
        {filteredFoods.map(food => (
          <FoodBox key={food.name} food={food} addFood={addFood} />
        ))}
      </div>
      <div>
        <h2>Today's Food</h2>
        <ul>
          {selectedFoods.map((food, index) => (
            <li key={index} className="selected-food">
              <div className="selected-food-info">
                <figure className="image">
                  <img src={food.img} alt={food.name} />
                </figure>
                <span>{food.quantity} {food.name} = {food.totalCalories} cal</span>
                <button className="button is-danger" onClick={() => resetFood(food.name)}>Reset</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

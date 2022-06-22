import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeAppContext from '../context/RecipeAppContext';

function Mainpage() {
  const {
    foods: { mealRecipes }, drinks: { drinkRecipes },
  } = useContext(RecipeAppContext);

  console.log('mealRecipes', mealRecipes);
  console.log('drinkRecipes', drinkRecipes);
  const history = useHistory();

  console.log(history.location.pathname);
  return (<div>mainpage</div>);
  // requisito 25 em diante~
}

export default Mainpage;

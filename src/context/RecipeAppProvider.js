import React, { useState } from 'react';
import propTypes from 'prop-types';
import RecipeAppContext from './RecipeAppContext';

function RecipeAppProvider({ children }) {
  const [mealRecipes, setMealRecipes] = useState([]);
  const [drinkRecipes, setDrinkRecipes] = useState([]);

  const RECIPE_CONTEXT = {
    foods: {
      mealRecipes,
      setMealRecipes,
    },
    drinks: {
      drinkRecipes,
      setDrinkRecipes,
    },
  };

  return (
    <RecipeAppContext.Provider value={ RECIPE_CONTEXT }>
      { children }
    </RecipeAppContext.Provider>
  );
}

RecipeAppProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default RecipeAppProvider;

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import RecipeAppContext from './RecipeAppContext';
import retrieveRecipeAPIData from '../helpers/RecipesAPI';

function RecipeAppProvider({ children }) {
  const [mealRecipes, setMealRecipes] = useState([]);
  const [drinkRecipes, setDrinkRecipes] = useState([]);

  const RECIPE_CONTEXT = {
    foods: {
      mealRecipes,
    },
    drinks: {
      drinkRecipes,
    },
  };

  useEffect(() => {
    const saveRecipesFromAPI = async () => {
      const mealRecipesFromAPI = await retrieveRecipeAPIData('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const drinkRecipesFromAPI = await retrieveRecipeAPIData('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      setMealRecipes(mealRecipesFromAPI);
      setDrinkRecipes(drinkRecipesFromAPI);
    };
    saveRecipesFromAPI();
  }, []);

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

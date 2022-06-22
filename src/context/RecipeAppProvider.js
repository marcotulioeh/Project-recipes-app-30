import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import RecipeAppContext from './RecipeAppContext';
import retrieveRecipeAPIData from '../helpers/RecipesAPI';

function RecipeAppProvider({ children }) {
  const [mealRecipes, setMealRecipes] = useState([]);
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);

  const RECIPE_CONTEXT = {
    foods: {
      mealRecipes,
      filteredMeals,
    },
    drinks: {
      drinkRecipes,
      filteredDrinks,
    },
  };

  // para filtrar pela search bar & mandar somente 12~
  useEffect(() => {
    const recipesToShow = 12;
    if (mealRecipes.length !== 0 && drinkRecipes.length !== 0) {
      setFilteredMeals(mealRecipes.meals
        .filter((_elemento, index) => index < recipesToShow));
      setFilteredDrinks(drinkRecipes.drinks
        .filter((_elemento, index) => index < recipesToShow));
    }
  }, [mealRecipes, drinkRecipes]);

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

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import RecipeAppContext from './RecipeAppContext';
import retrieveRecipeAPIData from '../helpers/RecipesAPI';

function RecipeAppProvider({ children }) {
  const [mealRecipes, setMealRecipes] = useState([]);
  const [drinkRecipes, setDrinkRecipes] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [mealCategories, setMealCategories] = useState([]);
  const [drinkCategories, setDrinkCategories] = useState([]);
  const [mealCategoryFilters, setMealCategoryFilters] = useState([]);
  const [drinkCategoryFilters, setDrinkCategoryFilters] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');
  const [mealByCategory, setMealByCategory] = useState([]);
  const [drinksByCategory, setDrinksByCategory] = useState([]);

  const RECIPE_CONTEXT = {
    foods: {
      filteredMeals,
    },
    drinks: {
      filteredDrinks,
    },
    categories: {
      mealCategoryFilters,
      drinkCategoryFilters,
    },
    filtering: {
      currentFilter,
      setCurrentFilter,
    },
  };

  // para filtrar por category & mandar somente 12~
  useEffect(() => {
    const recipesToShow = 12;
    if (mealRecipes.length !== 0 && drinkRecipes.length !== 0 && currentFilter === '') {
      setFilteredMeals(mealRecipes.meals
        .filter((_element, index) => index < recipesToShow));
      setFilteredDrinks(drinkRecipes.drinks
        .filter((_element, index) => index < recipesToShow));
    }
    if (currentFilter !== '' && mealByCategory.length !== 0) {
      setFilteredMeals(mealByCategory
        .filter((_element, index) => index < recipesToShow));
    }
    if (currentFilter !== '' && drinksByCategory.length !== 0) {
      setFilteredDrinks(drinksByCategory
        .filter((_element, index) => index < recipesToShow));
    }
  }, [mealRecipes, drinkRecipes, currentFilter, mealByCategory, drinksByCategory]);

  useEffect(() => {
    if (currentFilter !== '') {
      const retrieveRecipesFilteredByCategoriesFromAPI = async () => {
        if (currentFilter !== '' && mealCategoryFilters
          .some(({ strCategory }) => strCategory === currentFilter)) {
          const mealsFilteredByCategory = await
          retrieveRecipeAPIData(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${currentFilter}`,
          );
          setMealByCategory(mealsFilteredByCategory.meals);
        }
        if (currentFilter !== '' && drinkCategoryFilters
          .some(({ strCategory }) => strCategory === currentFilter)) {
          const drinksFilteredByCategory = await
          retrieveRecipeAPIData(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${currentFilter}`,
          );
          setDrinksByCategory(drinksFilteredByCategory.drinks);
        }
      };
      retrieveRecipesFilteredByCategoriesFromAPI();
    }
  }, [currentFilter, mealCategoryFilters, drinkCategoryFilters]);

  // para filtrar as categorias q vem da API~
  useEffect(() => {
    const filterNumber = 5;
    if (mealCategories.length !== 0 && drinkCategories.length !== 0) {
      const mealCatFilters = mealCategories.meals
        .filter((_elemento, index) => index < filterNumber);
      const drinkCatFilters = drinkCategories.drinks
        .filter((_elemento, index) => index < filterNumber);
      setMealCategoryFilters(mealCatFilters);
      setDrinkCategoryFilters(drinkCatFilters);
    }
  }, [mealCategories, drinkCategories]);

  // useEffect p/ chamadas de API iniciais
  useEffect(() => {
    const saveRecipesFromAPI = async () => {
      const mealRecipesFromAPI = await retrieveRecipeAPIData('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const drinkRecipesFromAPI = await retrieveRecipeAPIData('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const mealCategoriesFromAPI = await retrieveRecipeAPIData('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const drinkCategoriesFromAPI = await retrieveRecipeAPIData('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      setMealRecipes(mealRecipesFromAPI);
      setDrinkRecipes(drinkRecipesFromAPI);
      setMealCategories(mealCategoriesFromAPI);
      setDrinkCategories(drinkCategoriesFromAPI);
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

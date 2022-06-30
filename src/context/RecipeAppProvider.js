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
  const [searchFilters, setSearchFilters] = useState({});
  const [searchResult, setSearchResult] = useState({ type: '', recipes: [] });
  const [isOpenMessageCopy, setIsOpenMessageCopy] = useState(false);

  const RECIPE_CONTEXT = {
    foods: {
      setFilteredMeals,
      filteredMeals,
    },
    drinks: {
      setFilteredDrinks,
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
    searching: {
      setSearchFilters,
      searchResult,
    },
    a: {
      searchFilters,
      setSearchResult,
    },
    messageCopy: {
      setIsOpenMessageCopy,
      isOpenMessageCopy,
    },
  };

  useEffect(() => {
    const getSearchDataFromAPI = async () => {
      const URLFirstSection = searchFilters.recipeType === '/foods' ? 'https://www.themealdb' : 'https://www.thecocktaildb';
      const type = searchFilters.recipeType === '/foods' ? 'meals' : 'drinks';
      let URLSecondSection;
      switch (searchFilters.type) {
      case 'Ingredient':
        URLSecondSection = '.com/api/json/v1/1/filter.php?i=';
        break;
      case 'Name':
        URLSecondSection = '.com/api/json/v1/1/search.php?s=';
        break;
      case 'First letter':
        URLSecondSection = '.com/api/json/v1/1/search.php?f=';
        break;
      default:
        break;
      }
      const URLToSearch = `${URLFirstSection}${URLSecondSection}${searchFilters.string}`;
      const APISearchResult = await retrieveRecipeAPIData(URLToSearch);
      // console.log(APISearchResult);
      setSearchResult({ type: searchFilters.recipeType, recipes: APISearchResult[type] });
    };
    if (searchFilters.type) {
      getSearchDataFromAPI();
    }
  }, [searchFilters]);

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
    if (searchResult.recipes
      && searchResult.recipes.length !== 0 && searchResult.type === '/foods') {
      setFilteredMeals(searchResult.recipes
        .filter((_element, index) => index < recipesToShow));
      // console.log(searchResult);
    }
    if (searchResult.recipes
      && searchResult.recipes.length !== 0 && searchResult.type === '/drinks') {
      setFilteredDrinks(searchResult.recipes
        .filter((_element, index) => index < recipesToShow));
    }
  }, [mealRecipes,
    drinkRecipes,
    currentFilter,
    mealByCategory,
    drinksByCategory,
    searchResult,
  ]);

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

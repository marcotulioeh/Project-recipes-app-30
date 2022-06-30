import React, { useEffect, useState, useContext } from 'react';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import RecipeAppContext from '../context/RecipeAppContext';
import { getFavoriteRecipesFromLocalStorange,
  removeFavoriteRecipesFromLocalStorange } from '../helpers/recipeLocalStorage';

const messageCopied = () => (
  <div>
    <h3>Link copied!</h3>
  </div>
);

const FavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const { messageCopy: { isOpenMessageCopy } } = useContext(RecipeAppContext);

  const onClickremoveFavoriteRecipe = (recipeRemoved) => {
    setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe !== recipeRemoved));
    removeFavoriteRecipesFromLocalStorange(recipeRemoved);
  };

  const onClickFilter = (type) => {
    switch (type) {
    case 'food':
      setFavoriteRecipes(getFavoriteRecipesFromLocalStorange()
        .filter((recipe) => recipe.type === 'food'));
      break;

    case 'drink':
      setFavoriteRecipes(getFavoriteRecipesFromLocalStorange()
        .filter((recipe) => recipe.type === 'drink'));
      break;
    case '':
      setFavoriteRecipes(getFavoriteRecipesFromLocalStorange());
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    setFavoriteRecipes(getFavoriteRecipesFromLocalStorange());
  }, []);

  // useEffect(() => {
  //   console.log('atualizou');
  // }, [favoriteRecipes]);

  return (
    <>
      <Header title="Favorite Recipes" />
      { isOpenMessageCopy && messageCopied() }
      <ul>
        <li>
          <button
            type="button"
            data-testid="filter-by-all-btn"
            onClick={ () => onClickFilter('') }
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            data-testid="filter-by-food-btn"
            onClick={ () => onClickFilter('food') }
          >
            Food
          </button>
        </li>
        <li>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
            onClick={ () => onClickFilter('drink') }
          >
            Drinks
          </button>
        </li>
      </ul>
      {
        favoriteRecipes && favoriteRecipes.map((recipe, index) => (
          <FavoriteRecipeCard
            key={ index }
            recipe={ recipe }
            index={ index }
            onClick={ () => onClickremoveFavoriteRecipe(recipe) }
          />
        ))
      }
    </>
  );
};

export default FavoriteRecipes;

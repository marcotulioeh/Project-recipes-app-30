import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import { getFavoriteRecipesFromLocalStorange, updateLocalStorage }
from '../helpers/favoriteRecipesLocalStorage';

// [{
//   id: id-da-receita,
//   type: food-ou-drink,
//   nationality: nacionalidade-da-receita-ou-texto-vazio,
//   category: categoria-da-receita-ou-texto-vazio,
//   alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
//   name: nome-da-receita,
//   image: imagem-da-receita
// }]

const FavoriteRecipes = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  // const [favoriteFoodsRecipes, setFavoriteFoodsRecipes] = useState([]);
  // const [favoriteDrinksRecipes, setFavoriteDrinksRecipes] = useState([]);
  // const [filter, setFilter] = useState('');

  const removeFavoriteRecipe = (recipeRemoved) => {
    setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe !== recipeRemoved));
    updateLocalStorage(favoriteRecipes);
  };

  useEffect(() => {
    setFavoriteRecipes(getFavoriteRecipesFromLocalStorange());
  }, []);

  return (
    <>
      <Header title="Favorite Recipes" />
      <ul>
        <li>
          <button
            type="button"
            data-testid="filter-by-all-btn"
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            data-testid="filter-by-food-btn"
          >
            Food
          </button>
        </li>
        <li>
          <button
            type="button"
            data-testid="filter-by-drink-btn"
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
            onClick={ () => removeFavoriteRecipe(recipe) }
          />
        ))
      }
    </>
  );
};

export default FavoriteRecipes;

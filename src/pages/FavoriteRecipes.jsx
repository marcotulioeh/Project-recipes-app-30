import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';

// const messageCopied = () => (
//   <div>
//     <h3>Link copied!</h3>
//   </div>
// );

const FavoriteRecipes = () => {
  // const { messageCopy: { isOpenMessageCopy } } = useContext(RecipeAppContext);
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  // const [favoriteFoodsRecipes, setFavoriteFoodsRecipes] = useState([]);
  // const [favoriteDrinksRecipes, setFavoriteDrinksRecipes] = useState([]);
  // const [filter, setFilter] = useState('');

  const onClickremoveFavoriteRecipe = (recipeRemoved) => {
    setFavoriteRecipes(favoriteRecipes.filter((recipe) => recipe !== recipeRemoved));
    removeFavoriteRecipe(recipeRemoved);
  };

  // const onClickFavoriteFoodRecipes = () => {
  //   const favoriteFoodRecipes = getFavoriteRecipesFromLocalStorange()
  //     .filter((recipe) => recipe.type === 'food');
  //   setFavoriteRecipes(favoriteFoodRecipes);
  // };

  // const onClickFavoriteDrinkRecipes = () => {
  //   const favoriteFoodRecipes = getFavoriteRecipesFromLocalStorange()
  //     .filter((recipe) => recipe.type === 'food');
  //   setFavoriteRecipes(favoriteFoodRecipes);
  // };

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

  return (
    <>
      <Header title="Favorite Recipes" />
      {/* { isOpenMessageCopy && messageCopied() } */}
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

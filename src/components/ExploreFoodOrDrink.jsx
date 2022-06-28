import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import retrieveRecipeAPIData from '../helpers/RecipesAPI';

function ExploreFoodOrDrink({ type }) {
  const history = useHistory();
  const surpriseMeHelper = {
    url: type === 'foods' ? 'https://www.themealdb.com/api/json/v1/1/random.php' : 'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    key: type === 'foods' ? 'meals' : 'drinks',
    id: type === 'foods' ? 'idMeal' : 'idDrink',
  };
  console.log(history);

  const retrieveRandomRecipeAndRedirect = async () => {
    const randomRecipe = await retrieveRecipeAPIData(surpriseMeHelper.url);
    const recipeId = randomRecipe[surpriseMeHelper.key][0][surpriseMeHelper.id];
    console.log(history);
    history.push(`../../${type}/${recipeId}`);
  };

  return (
    <>
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ () => history.push(`${type}/ingredients`) }
      >
        By Ingredient
      </button>

      { type === 'foods' && (
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => history.push(`${type}/nationalities`) }
        >
          By Nationality
        </button>
      )}

      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ () => retrieveRandomRecipeAndRedirect() }
      >
        Surprise me!
      </button>
    </>
  );
}

ExploreFoodOrDrink.propTypes = {
  type: propTypes.string.isRequired,
};

export default ExploreFoodOrDrink;

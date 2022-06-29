import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import RecipeAppContext from '../context/RecipeAppContext';
import retrieveRecipeAPIData from '../helpers/RecipesAPI';

function IngredientCard({ type, image, name, index }) {
  const history = useHistory();
  const {
    foods: { setFilteredMeals },
    drinks: { setFilteredDrinks },
  } = useContext(RecipeAppContext);

  const updateRecipesByIngredientAndRedirect = async () => {
    const maxRecipesPerPage = 12;
    const URLToSearch = type === 'meals' ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}` : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`;
    const APIData = await retrieveRecipeAPIData(URLToSearch);
    const newRecipesToShow = APIData[type]
      .filter((_recipe, recipeIndex) => recipeIndex < maxRecipesPerPage);
    if (type === 'meals') {
      setFilteredMeals(newRecipesToShow);
    } else {
      setFilteredDrinks(newRecipesToShow);
    }
    history.push(`../../${type === 'meals' ? 'foods' : 'drinks'}`);
  };

  return (
    <button
      type="button"
      data-testid={ `${index}-ingredient-card` }
      onClick={ () => updateRecipesByIngredientAndRedirect() }
    >
      <img src={ image } alt={ name } data-testid={ `${index}-card-img` } />
      <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
    </button>
  );
}

IngredientCard.propTypes = {
  image: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  index: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
};

export default IngredientCard;

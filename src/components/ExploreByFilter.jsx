import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import retrieveRecipeAPIData from '../helpers/RecipesAPI';
import IngredientCard from './IngredientCard';
import ExploreNationality from './ExploreNationality';

function ExploreByFilter({ filterType, recipeType }) {
  const [cardsToShow, setCardsToShow] = useState([]);

  useEffect(() => {
    const getIngredientsOrNationalities = async (
      foodOrDrink,
      ingredientOrNationality,
    ) => {
      let urlToSearch;
      const keyType = foodOrDrink === 'foods' ? 'meals' : 'drinks';
      const howManyRecipesToShow = 12;
      if (ingredientOrNationality === 'nationality') {
        urlToSearch = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      } else {
        urlToSearch = foodOrDrink === 'foods' ? 'https://www.themealdb.com/api/json/v1/1/list.php?i=list' : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';
      }
      const APIData = await retrieveRecipeAPIData(urlToSearch);
      setCardsToShow(APIData[keyType]
        .filter((_element, index) => index < howManyRecipesToShow));
    };
    if (filterType && recipeType) {
      getIngredientsOrNationalities(recipeType, filterType);
    }
  }, [filterType, recipeType]);

  console.log(cardsToShow);

  return (
    <>
      { filterType === 'ingredients' && (
        <div>
          { recipeType === 'foods' && cardsToShow.length !== 0
      && cardsToShow.map(({ strIngredient }, index) => (
        <IngredientCard
          type="meals"
          key={ index }
          index={ index }
          name={ strIngredient }
          image={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
        />)) }
          { recipeType === 'drinks' && cardsToShow.length !== 0
      && cardsToShow.map(({ strIngredient1 }, index) => (
        <IngredientCard
          type="drinks"
          key={ index }
          index={ index }
          name={ strIngredient1 }
          image={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
        />)) }
        </div>)}
      { recipeType === 'foods' && filterType === 'nationality' && <ExploreNationality /> }
    </>
  );
}

ExploreByFilter.propTypes = {
  filterType: propTypes.string.isRequired,
  recipeType: propTypes.string.isRequired,
};

export default ExploreByFilter;

import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import getRandomRecipeID from '../helpers/getRandomRecipeID';

const BUTTONS_TYPE = {
  btn_by_ingredient: 'By Ingredient',
  btn_by_nationality: 'By Nationality',
  btn_surprise_me: 'Surprise me!',
};

const ExploreFoodsOrDrinks = ({ history }) => {
  const [randomRecipeID, setRandomRecipeID] = useState({});

  const { pathname } = history.location;

  const fetchRandomRecipeID = async () => {
    const ids = await getRandomRecipeID();
    setRandomRecipeID(ids);
  };

  useEffect(() => {
    fetchRandomRecipeID();
  }, []);

  const redirectToPage = ({ target }) => {
    const { textContent: buttonContentText } = target;
    switch (buttonContentText) {
    case (BUTTONS_TYPE.btn_by_ingredient):
      if (pathname === '/explore/foods') {
        history.push('/explore/foods/ingredients');
      } else {
        history.push('/explore/drinks/ingredients');
      }
      break;
    case (BUTTONS_TYPE.btn_by_nationality):
      history.push('/explore/foods/nationalities');
      break;
    case (BUTTONS_TYPE.btn_surprise_me):
      if (pathname === '/explore/foods') {
        history.push(`/foods/${randomRecipeID.randomMealId}`);
      } else {
        history.push(`/drinks/${randomRecipeID.randomDrinkId}`);
      }
      break;
    default:
      break;
    }
  };

  return (
    <>
      {/* header */}
      <button
        type="button"
        data-testid="explore-by-ingredient"
        onClick={ (event) => redirectToPage(event) }
      >
        By Ingredient
      </button>
      {
        pathname !== '/explore/drinks' && (
          <button
            type="button"
            data-testid="explore-by-nationality"
            onClick={ (event) => redirectToPage(event) }
          >
            By Nationality
          </button>
        )
      }
      <button
        type="button"
        data-testid="explore-surprise"
        onClick={ (event) => redirectToPage(event) }
      >
        Surprise me!
      </button>
      {/* menu inferior */}
    </>
  );
};

ExploreFoodsOrDrinks.propTypes = {
  history: propTypes.shape().isRequired,
  pathname: propTypes.string,
};

ExploreFoodsOrDrinks.defaultProps = {
  pathname: '',
};

export default ExploreFoodsOrDrinks;

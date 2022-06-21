import React from 'react';
import propTypes from 'prop-types';

const ExploreFoodsOrDrinks = ({ history }) => {
  const { pathname } = history.location;
  return (
    <>
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        By Ingredient
      </button>
      {
        pathname !== '/explore/drinks' && (
          <button
            type="button"
            data-testid="explore-by-nationality"
          >
            By Nationality
          </button>
        )
      }
      <button
        type="button"
        data-testid="explore-surprise"
      >
        Surprise me!
      </button>
    </>
  );
};

ExploreFoodsOrDrinks.propTypes = {
  history: propTypes.shape().isRequired,
  pathname: propTypes.string.isRequired,
};

export default ExploreFoodsOrDrinks;

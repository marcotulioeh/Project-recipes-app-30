import React from 'react';

const ExploreFoodsOrDrinks = () => (
  <>
    <button
      type="button"
      data-testid="explore-by-ingredient"
    >
      By Ingredient
    </button>
    <button
      type="button"
      data-testid="explore-by-nationality"
    >
      By Nationality
    </button>
    <button
      type="button"
      data-testid="explore-surprise"
    >
      Surprise me!
    </button>
  </>
);

export default ExploreFoodsOrDrinks;

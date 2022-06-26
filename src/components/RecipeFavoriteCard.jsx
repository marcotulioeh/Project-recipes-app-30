import React from 'react';
import propTypes from 'prop-types';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function RecipeCardFavorite({ recipe, index, onClick }) {
  const { image, name, category, nationality } = recipe;
  return (
    <div>
      <img
        className="recipe-card-image"
        src={ image }
        alt={ name }
        data-testid={ `${index}-horizontal-image` }
      />
      <h2
        data-testid={ `${index}-horizontal-top-text` }
      >
        { `${nationality} - ${category}` }
      </h2>
      <h4
        data-testid={ `${index}-horizontal-name` }
      >
        { name }
      </h4>
      <button
        type="button"
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="share"
        />
      </button>
      <button
        type="button"
        onClick={ () => onClick() }
      >
        <img
          src={ blackHeartIcon }
          data-testid={ `${index}-horizontal-favorite-btn` }
          alt="black heart"
        />
      </button>
    </div>
  );
}

RecipeCardFavorite.propTypes = {
  recipe: propTypes.shape({
    image: propTypes.string,
    name: propTypes.string,
    category: propTypes.string,
    nationality: propTypes.string,
  }).isRequired,
  index: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

export default RecipeCardFavorite;

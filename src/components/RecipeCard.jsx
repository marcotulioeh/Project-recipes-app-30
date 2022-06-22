import React from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import propTypes from 'prop-types';
import '../style/RecipeCard.css';

function RecipeCard(props) {
  const { props: { image, name, index } } = props;
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        className="recipe-card-image"
        src={ image }
        alt={ name }
      />
      <h4 data-testid={ `${index}-card-name` }>{ name }</h4>
    </div>
  );
}

RecipeCard.propTypes = {
  props: propTypes.shape().isRequired,
};

export default RecipeCard;

import React from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import propTypes from 'prop-types';
import '../style/RecipeCard.css';

function RecipeCard(props) {
  const { props: { image, name } } = props;
  return (
    <div>
      <img className="recipe-card-image" src={ image } alt={ name } />
      <h4>{ name }</h4>
    </div>
  );
}

RecipeCard.propTypes = {
  props: propTypes.shape().isRequired,
};

export default RecipeCard;

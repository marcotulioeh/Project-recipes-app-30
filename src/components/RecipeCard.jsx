import React from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import '../style/RecipeCard.css';

function RecipeCard(props) {
  const { props: { image, name, index, id, page } } = props;
  const history = useHistory();
  return (
    <button
      type="button"
      data-testid={ `${index}-recipe-card` }
      onClick={ () => history.push(`/${page}/${id}`) }
    >
      <img
        data-testid={ `${index}-card-img` }
        className="recipe-card-image"
        src={ image }
        alt={ name }
      />
      <h4 data-testid={ `${index}-card-name` }>{ name }</h4>
    </button>
  );
}

RecipeCard.propTypes = {
  props: propTypes.shape().isRequired,
};

export default RecipeCard;

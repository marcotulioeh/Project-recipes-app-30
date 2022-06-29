import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import RecipeAppContext from '../context/RecipeAppContext';

const THREE_MILLISECONDS = 3000;

function FavoriteRecipeCard({ recipe, index, onClick }) {
  const { id, image, name, type, category, nationality, alcoholicOrNot } = recipe;

  const history = useHistory();

  const { messageCopy: { setIsOpenMessageCopy } } = useContext(RecipeAppContext);

  const redirectToDetailsPage = () => {
    switch (recipe.type) {
    case ('food'):
      history.push(`/foods/${recipe.id}`);
      break;
    case ('drink'):
      history.push(`/drinks/${recipe.id}`);
      break;
    default:
      break;
    }
  };

  const copyRecipeDetailsLink = () => {
    setIsOpenMessageCopy(true);
    setTimeout(() => {
      setIsOpenMessageCopy(false);
    }, THREE_MILLISECONDS);
    copy(`http://localhost:3000/${type}s/${id}`);
  };

  return (
    <div>
      <button
        type="button"
        onClick={ () => redirectToDetailsPage() }
      >
        <img
          className="recipe-card-image"
          src={ image }
          alt={ name }
          data-testid={ `${index}-horizontal-image` }
        />
      </button>
      {
        alcoholicOrNot ? (
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            { `${alcoholicOrNot}` }
          </h2>
        ) : (
          <h2
            data-testid={ `${index}-horizontal-top-text` }
          >
            { `${nationality} - ${category}` }
          </h2>
        )
      }
      <button
        type="button"
        onClick={ () => redirectToDetailsPage() }
      >
        <h4
          data-testid={ `${index}-horizontal-name` }
        >
          { name }
        </h4>
      </button>
      <button
        type="button"
        onClick={ () => copyRecipeDetailsLink() }
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

FavoriteRecipeCard.propTypes = {
  recipe: propTypes.shape({
    id: propTypes.string,
    image: propTypes.string,
    type: propTypes.string,
    name: propTypes.string,
    category: propTypes.string,
    nationality: propTypes.string,
    alcoholicOrNot: propTypes.string,
  }).isRequired,
  index: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};

export default FavoriteRecipeCard;

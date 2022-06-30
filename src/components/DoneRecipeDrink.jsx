import React, { useState } from 'react';
import propTypes, { objectOf } from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipeDrink({ drink, position }) {
  const history = useHistory();
  const [copied, setCopied] = useState(false);
  const copyRecipe = async () => {
    await navigator.clipboard.writeText(`http://localhost:3000/drinks/${drink.id}`);
    setCopied(true);
  };
  return (
    <div>
      <input
        type="image"
        src={ drink.image }
        alt={ drink.name }
        data-testid={ `${position}-horizontal-image` }
        width="160px"
        onClick={ () => history.push(`/drinks/${drink.id}`) }
      />
      <p data-testid={ `${position}-horizontal-top-text` }>{drink.alcoholicOrNot}</p>
      <Link to={ `/drinks/${drink.id}` }>
        <p data-testid={ `${position}-horizontal-name` }>{drink.name}</p>
      </Link>
      <p data-testid={ `${position}-horizontal-done-date` }>{drink.doneDate}</p>
      <input
        type="image"
        src={ shareIcon }
        data-testid={ `${position}-horizontal-share-btn` }
        alt="Share"
        onClick={ copyRecipe }
      />
      {copied && <h2>Link copied!</h2>}
    </div>
  );
}

DoneRecipeDrink.propTypes = {
  drink: propTypes.shape(objectOf).isRequired,
  position: propTypes.number.isRequired,
};

export default DoneRecipeDrink;

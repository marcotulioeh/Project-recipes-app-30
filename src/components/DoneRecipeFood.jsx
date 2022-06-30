import React, { useState } from 'react';
import propTypes, { objectOf } from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';

function DoneRecipeFood({ food }) {
  const history = useHistory();
  const [copied, setCopied] = useState(false);
  const copyRecipe = async () => {
    await navigator.clipboard.writeText(`http://localhost:3000/foods/${food.id}`);
    setCopied(true);
  };
  return (
    <div>
      <input
        type="image"
        src={ food.image }
        alt={ food.name }
        data-testid="0-horizontal-image"
        width="160px"
        onClick={ () => history.push(`/foods/${food.id}`) }
      />
      <p
        data-testid="0-horizontal-top-text"
      >
        {`${food.nationality} - ${food.category}`}

      </p>
      <Link to={ `/foods/${food.id}` }>
        <p data-testid="0-horizontal-name">{food.name}</p>
      </Link>
      <p data-testid="0-horizontal-done-date">{food.doneDate}</p>
      <input
        type="image"
        src={ shareIcon }
        data-testid="0-horizontal-share-btn"
        alt="Share"
        onClick={ copyRecipe }
      />
      {copied && <h2>Link copied!</h2>}
      <ol>
        {food.tags.map((item, index) => (
          <li data-testid={ `${0}-${item}-horizontal-tag` } key={ index }>{item}</li>
        ))}
      </ol>
    </div>
  );
}

DoneRecipeFood.propTypes = {
  food: propTypes.shape(objectOf).isRequired,
};

export default DoneRecipeFood;

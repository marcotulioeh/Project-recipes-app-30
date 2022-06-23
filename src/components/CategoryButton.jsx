import React, { useContext } from 'react';
import propTypes from 'prop-types';
import RecipeAppContext from '../context/RecipeAppContext';

function CategoryButton(props) {
  const { filtering: { setCurrentFilter } } = useContext(RecipeAppContext);
  const { props: { categoryName } } = props;

  const toggleThisFilter = (category) => {
    setCurrentFilter((prevState) => (prevState === category ? '' : category));
  };

  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
      onClick={ () => toggleThisFilter(categoryName) }
    >
      { categoryName }
    </button>
  );
}

CategoryButton.propTypes = {
  props: propTypes.shape().isRequired,
};

export default CategoryButton;

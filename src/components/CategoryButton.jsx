import React from 'react';
import propTypes from 'prop-types';

function CategoryButton(props) {
  const { props: { categoryName } } = props;
  return (
    <button
      type="button"
      data-testid={ `${categoryName}-category-filter` }
    >
      { categoryName }
    </button>
  );
}

CategoryButton.propTypes = {
  props: propTypes.shape().isRequired,
};

export default CategoryButton;

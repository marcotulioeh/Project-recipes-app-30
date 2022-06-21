import React from 'react';
import propTypes from 'prop-types';

const Explore = ({ history }) => (
  <div>
    {/* Header */}
    <button
      type="button"
      data-testid="explore-foods"
      onClick={ () => { history.push('/explore/foods'); } }
    >
      Explore Foods
    </button>
    <button
      type="button"
      data-testid="explore-drinks"
      onClick={ () => { history.push('/explore/drinks'); } }
    >
      Explore Drinks
    </button>
    {/* Menu inferio */}
  </div>
);

Explore.propTypes = {
  history: propTypes.shape().isRequired,
};

export default Explore;

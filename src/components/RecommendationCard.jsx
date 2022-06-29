import React from 'react';
import propTypes from 'prop-types';

function RecommendationCard({ index, recommendationImage, recommendationTitle,
  recommendationType }) {
  return (
    <div
      className="recommendationCard"
      data-testid={ `${index}-recomendation-card` }
    >
      <img
        src={ recommendationImage }
        alt={ recommendationTitle }
        className="recommendationImage"
      />
      <p>{ recommendationType }</p>
      <p
        data-testid={ `${index}-recomendation-title` }
      >
        { recommendationTitle }
      </p>
    </div>
  );
}

RecommendationCard.propTypes = {
  index: propTypes.number.isRequired,
  recommendationImage: propTypes.string.isRequired,
  recommendationTitle: propTypes.string.isRequired,
  recommendationType: propTypes.string.isRequired,
};

export default RecommendationCard;

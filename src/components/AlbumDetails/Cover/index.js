import React from 'react';
import PropTypes from 'prop-types';
import './Cover.scss';
/**
 * Implementing Cover field of Album details
 * @component
 * @param {string} thumbnail - The cover image url
 * @param {number} rank - The album's current rank number
 */
function Cover({ thumbnail, rank }) {
  /** Conditionally renders album's rank */
  const renderRank = () => {
    if (rank) {
      return (
        <div className="album-ranking">
          {rank}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="image-container">
      <img
        className="album-image"
        src={thumbnail}
        alt="Thumbnail"
      />
      {renderRank()}
    </div>
  );
}

Cover.propTypes = {
  thumbnail: PropTypes.string,
  rank: PropTypes.number
};

export default Cover;

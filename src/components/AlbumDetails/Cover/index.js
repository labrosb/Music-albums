import React from 'react';
import PropTypes from 'prop-types';
import './Cover.scss';

function Cover({ thumbnail, rank }) {
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

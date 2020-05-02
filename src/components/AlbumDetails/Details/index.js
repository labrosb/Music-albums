import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Details.scss';

function Details({ albumData, toggleFavorite, isFavorite }) {
  const onViewMoreClick = useCallback(() => {
    window.location.href = albumData.link;
  }, [albumData.link]);

  const onFavoriteClick = useCallback(() => {
    toggleFavorite(isFavorite, albumData);
  }, [albumData, isFavorite, toggleFavorite]);

  return (
    <div className="album-details">
      <div className="details-row">
        <div
          className="light-cover"
          style={{ backgroundImage: `url(${albumData.thumbnail})` }}
        />
        <div className="details-column">
          <div className="album-artist">
            {albumData.artist}
          </div>
          <div className="album-name">
            {albumData.name}
          </div>
          <br />
          <div className="album-detail">
            Music: {albumData.category}
          </div>
          <div className="album-detail">
            Int.Release {albumData.releaseDate}
          </div>
        </div>
        <div className="album-price">
          {albumData.price}
        </div>
      </div>
      <div className="album-buttons">
        <div
          className="album-button favorite-button"
          onClick={onFavoriteClick}
        >
          <FontAwesomeIcon
            className="button-icon"
            icon={faHeart}
          />
          <span>{isFavorite ? 'Remove' : 'Add'}</span>
        </div>
        <div
          className="album-button"
          onClick={onViewMoreClick}
        >
          View More
        </div>
      </div>
    </div>
  );
}

Details.propTypes = {
  albumData: PropTypes.object,
  isFavorite: PropTypes.bool,
  toggleFavorite: PropTypes.func
};

export default Details;

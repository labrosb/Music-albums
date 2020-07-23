import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './PreviewCard.scss';
/**
 * Preview Card Component used as list / Catalogue Item
 * @component
 * @param {function} toggleFavorite - Redux: Adds/removes album from the favorites list
 * @param {boolean} isFavorite - Indicates if the album is in favorites list
 * @param {object} album - The album's details
 */
function Preview({ toggleFavorite, isFavorite, album }) {
  const history = useHistory();
  /** Function called on card click */
  const onCardClick = useCallback(() => {
    // Redirects to the album's page
    history.push({
      pathname: `/album-page/${album.id}`,
      state: album
    });
  }, [album, history]);
  /** Function called on favorite button click */
  const onFavoriteClick = useCallback(ev => {
    ev.stopPropagation();
    // Adds album to favorites or removes if it's already in favorites
    toggleFavorite(isFavorite, album);
  }, [isFavorite, album, toggleFavorite]);

  return (
    <div
      className="card-container"
      onClick={onCardClick}
    >
      <LazyLoad height={200}>
        <img
          className="card-image"
          src={album.thumbnail}
          alt={album.thumbSmall}
        />
      </LazyLoad>
      <div
        className={`card-favorite ${isFavorite ? 'active' : ''}`}
        onClick={onFavoriteClick}
      >
        <FontAwesomeIcon
          className="favorite-icon"
          icon={faHeart}
        />
      </div>
      <div className="inline-elements">
        <span className="card-rank">
          {album.rank || 'X'}
        </span>
        <div className="card-details">
          <p className="card-detail primary">
            {album.name}
          </p>
          <p className="card-detail secondary">
            {album.artist}
          </p>
        </div>
      </div>
    </div>
  );
}

Preview.propTypes = {
  isFavorite: PropTypes.bool,
  album: PropTypes.object,
  toggleFavorite: PropTypes.func
};

export default Preview;

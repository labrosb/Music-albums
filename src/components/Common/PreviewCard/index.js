import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './PreviewCard.scss';

// Preview Card Component used as list / Catalogue Item

const root = process.env.PUBLIC_URL;

function Preview({ toggleFavorite, isFavorite, album }) {
  const history = useHistory();
  const onCardClick = useCallback(() => {
    history.push({
      pathname: `${root}/album-page/${album.id}`,
      state: album
    });
  }, [album, history]);

  const onFavoriteClick = useCallback(ev => {
    ev.stopPropagation();
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
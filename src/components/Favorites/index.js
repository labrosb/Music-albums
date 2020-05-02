import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReduxConnector from '../../state/connector';
import Header from '../Common/Header';
import AlbumsList from '../Common/AlbumsList';

function Favorites({
  favorites,
  toggleFavorite,
  setFavoriteRankings
}) {
  useEffect(() => {
    // Retrieving the actual rankings which change over time
    setFavoriteRankings();
  }, [setFavoriteRankings]);

  return (
    <>
      <Header active="favorites" />
      <div className="content">
        <AlbumsList
          isFavoritesList
          albums={favorites}
          {...{ toggleFavorite }}
        />
      </div>
    </>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func,
  setFavoriteRankings: PropTypes.func
};

export default ReduxConnector(Favorites);

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReduxConnector from '../../state/connector';
import Header from '../Common/Header';
import AlbumsList from '../Common/AlbumsList';
/**
 * Favorites list component
 * @component
 * @param {array} favorites - State: The favorites list
 * @param {function} toggleFavorite - Redux: Adds/removes album from the favorites list
 * @param {function} setFavoriteRankings - Redux: Retrieves the Albums rankings
 */
function Favorites({
  favorites,
  toggleFavorite,
  setFavoriteRankings
}) {
  useEffect(() => {
    // Retrieving on component load: Actual rankings which change over time
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

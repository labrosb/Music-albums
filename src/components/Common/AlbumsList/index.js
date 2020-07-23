import React from 'react';
import PropTypes from 'prop-types';
import Preview from '../PreviewCard';
import './AlbumsList.scss';
/**
 * Implementing a list / catalogue of album items
 * @component
 * @param {array} albums - State: The Albums list
 * @param {boolean} isFavoritesList - Indicates if the list is a favorites list
 * @param {function} toggleFavorite - Redux: Adds/removes album from the favorites list
 * @param {object} favoritesMap - Redux: Array of ids of favorites
 */
function AlbumList({ albums, isFavoritesList, toggleFavorite, favoritesMap }) {
  /** Function conditionally renders album's list */
  const list = () => {
    if (albums && albums.length > 0) {
      // Render list of albums
      return albums.map(album => (
        <div key={`albumList-${album.id}`}>
          <Preview
            isFavorite={isFavoritesList || favoritesMap.includes(album.id)}
            {...{ album, toggleFavorite }}
          />
        </div>
      ));
    }
    // If list is empty: Render alt message
    return (
      <div className="altMessage">
        <p>No Albums Found...</p>
      </div>
    );
  };

  return (
    <div className="list">{list()}</div>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.array,
  favoritesMap: PropTypes.array,
  toggleFavorite: PropTypes.func,
  isFavoritesList: PropTypes.bool
};

export default React.memo(AlbumList);

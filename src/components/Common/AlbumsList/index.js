import React from 'react';
import PropTypes from 'prop-types';
import Preview from '../PreviewCard';
import './AlbumsList.scss';

// Component implementing a list / catalogue of album items

function AlbumList({ albums, isFavoritesList, toggleFavorite, favoritesMap }) {
  const list = () => {
    if (albums && albums.length > 0) {
      return albums.map(album => (
        <div key={`albumList-${album.id}`}>
          <Preview
            isFavorite={isFavoritesList || favoritesMap.includes(album.id)}
            {...{ album, toggleFavorite }}
          />
        </div>
      ));
    }
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

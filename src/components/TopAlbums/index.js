import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReduxConnector from '../../state/connector';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Common/Header';
import AlbumsList from '../Common/AlbumsList';
import FilterBar from './FilterBar';

function TopAlbums({
  error,
  getTopAlbums,
  favoritesMap,
  toggleFavorite,
  topAlbums
}) {
  const [listReceived, setListReceived] = useState(false);
  const [filteredAlbums, setFilteredAlbums] = useState();
  useEffect(() => {
    getTopAlbums(100)
      .then(() => setListReceived(true));
  }, [getTopAlbums, setListReceived]);

  if (error.albums) {
    return (
      <Error noBackButton active="top100" message={error.albums} />
    );
  }

  if (!listReceived) {
    return (<Loading noBackButton active="top100" />);
  }

  return (
    <>
      <Header noBackButton active="top100" />
      <div className="content">
        <FilterBar
          placeholder="Search Titles..."
          onFiltered={setFilteredAlbums}
          data={topAlbums}
        />
        <AlbumsList
          albums={filteredAlbums || topAlbums}
          {...{ toggleFavorite, favoritesMap }}
        />
      </div>
    </>
  );
}

TopAlbums.propTypes = {
  error: PropTypes.object,
  topAlbums: PropTypes.array,
  favoritesMap: PropTypes.array,
  getTopAlbums: PropTypes.func,
  toggleFavorite: PropTypes.func
};

export default ReduxConnector(TopAlbums);

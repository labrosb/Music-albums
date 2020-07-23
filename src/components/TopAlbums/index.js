import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReduxConnector from '../../state/connector';
import Loading from '../Loading';
import Error from '../Error';
import Header from '../Common/Header';
import AlbumsList from '../Common/AlbumsList';
import FilterBar from './FilterBar';
/**
 * Component presenting Top 100 or filtered Albums list
 * @component
 * params - Declared in propTypes
 */
function TopAlbums({
  error,
  getTopAlbums,
  favoritesMap,
  toggleFavorite,
  topAlbums
}) {
  /** @type {[Boolean, setListReceived]} Indicates if is received */
  const [listReceived, setListReceived] = useState(false);

  /** @type {[Array, setFilteredAlbums]} Filtered albums list */
  const [filteredAlbums, setFilteredAlbums] = useState();

  useEffect(() => {
    // After component is rendered, request the top 100 album list
    getTopAlbums(100)
      .then(() => setListReceived(true));
  }, [getTopAlbums]);

  if (error.albums) {
    // If Error takes place: Render Error component
    return (
      <Error noBackButton active="top100" message={error.albums} />
    );
  }
  if (!listReceived) {
    // If list isn't received yet: Render Loading component
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
  /** State object: Error message */
  error: PropTypes.object,
  /** State Object: Favorites map list */
  favoritesMap: PropTypes.array,
  /** State Array: Top albums list */
  topAlbums: PropTypes.array,
  /** Redux-func: get top albums */
  getTopAlbums: PropTypes.func,
  /** Redux-func: Adds/removes album from the favorites list */
  toggleFavorite: PropTypes.func
};

export default ReduxConnector(TopAlbums);

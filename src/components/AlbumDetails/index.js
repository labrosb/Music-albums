import React, { useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ReduxConnector from '../../state/connector';
import Header from '../Common/Header';
import Loading from '../Loading';
import Error from '../Error';
import CoverImage from './Cover';
import Details from './Details';
import './AlbumDetails.scss';
// The header's title
const header = 'Album';
/**
 * Album details Page
 * @component
 * params - Declared in propTypes
 */
function AlbumDetails({
  error,
  location,
  match,
  getTopAlbums,
  topAlbums,
  getAlbumById,
  favoritesMap,
  toggleFavorite
}) {
  /** @type {[Boolean, setListReceived]} Indicates if album list is received */
  const [listReceived, setListReceived] = useState(() => !!topAlbums.length);

  /** @type {[object, setAlbumData]} The album details */
  const [albumData, setAlbumData] = useState(() => location.state || {});

  /** Checks if album is in favorites */
  const isFavorite = useMemo(() => (
    favoritesMap.includes(albumData.id)
  ), [albumData, favoritesMap]);

  useEffect(() => {
    // In case of pasting a link rather than navigating!
    // It wont work if the album is not in top 100 anymore.
    // An api call retrieving the album details directly is a better approach,
    // however there is an issue creating a profile to achieve a token
    if (!location.state) {
      const { id } = match.params;
      if (!topAlbums.length) {
        // If no albums are received (case of link paste), get top albums
        getTopAlbums(100).then(() => {
          // Retrieve album's data from app state
          const album = getAlbumById(id);
          setAlbumData(album);
          setListReceived(true);
        });
      } else {
        // If albums exist, retrieve album's data from app state
        const album = getAlbumById(id);
        setAlbumData(album);
      }
    } else {
      setListReceived(true);
    }
  }, [
    topAlbums,
    getTopAlbums,
    getAlbumById,
    setListReceived,
    location.state,
    match.params
  ]);

  if (error.albums) {
    // If Error takes place: Render Error component
    return (
      <Error message={error.albums} {...{ header }} />
    );
  }
  if (!listReceived && !location.state) {
    // If list isn't received yet: Render Loading component
    return (
      <Loading {...{ header }} />
    );
  }

  return (
    <>
      <Header title={header} />
      <div className="content">
        <div className="content-row">
          <CoverImage
            thumbnail={albumData.thumbnail}
            rank={albumData.rank}
          />
          <Details {...{ albumData, isFavorite, toggleFavorite }} />
        </div>
        <p className="rights-text">{albumData.rights}</p>
      </div>
    </>
  );
}

AlbumDetails.propTypes = {
  /** Object: Parameters received on redirect */
  location: PropTypes.object,
  /** Object: Path parameters */
  match: PropTypes.object,
  /** State object: Error message */
  error: PropTypes.object,
  /** State Object: Favorites map list */
  favoritesMap: PropTypes.array,
  /** State Array: Top albums list */
  topAlbums: PropTypes.array,
  /** Redux-func: Get top albums */
  getTopAlbums: PropTypes.func,
  /** Redux-func: Get album by id */
  getAlbumById: PropTypes.func,
  /** Redux-func: Adds/removes album from the favorites list */
  toggleFavorite: PropTypes.func
};

export default withRouter(
  ReduxConnector(React.memo(AlbumDetails))
);

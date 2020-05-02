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

const header = 'Album';

function TopAlbums({
  error,
  location,
  match,
  getTopAlbums,
  topAlbums,
  getAlbumById,
  favoritesMap,
  toggleFavorite
}) {
  const [listReceived, setListReceived] = useState(() => !!topAlbums.length);
  const [albumData, setAlbumData] = useState(() => location.state || {});

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
        getTopAlbums(100).then(() => {
          const album = getAlbumById(id);
          setAlbumData(album);
          setListReceived(true);
        });
      } else {
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
    return (
      <Error message={error.albums} {...{ header }} />
    );
  }

  if (!listReceived && !location.state) {
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

TopAlbums.propTypes = {
  error: PropTypes.object,
  topAlbums: PropTypes.array,
  favoritesMap: PropTypes.array,
  getTopAlbums: PropTypes.func,
  getAlbumById: PropTypes.func,
  toggleFavorite: PropTypes.func,
  location: PropTypes.object,
  match: PropTypes.object
};

export default withRouter(
  ReduxConnector(React.memo(TopAlbums))
);

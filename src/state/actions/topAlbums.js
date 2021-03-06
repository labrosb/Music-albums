import Api from '../../utilities/api';
import * as types from './types';
import { setError, resetError } from './error';

/**
 * Simplifies and ads additional properties to the album object
 * @param {object} album - The retrieved album's details
 */
function formatAlbumData(album) {
  // Getting the big image which is not provided by the API
  const getBigThumb = smallImage => (
    smallImage.replace('55x55bb', '500x500bb')
  );
  // Adding rankings and big image
  return album.map((item, index) => ({
    id: item.id.attributes['im:id'],
    thumbnail: getBigThumb(item['im:image'][0].label),
    thumbSmall: item['im:image'][0].label,
    name: item['im:name'].label,
    artist: item['im:artist'].label,
    price: item['im:price'].label,
    category: item.category.attributes.label,
    releaseDate: item['im:releaseDate'].attributes.label,
    link: item.link.attributes.href,
    rights: item.rights.label,
    rank: index + 1
  }));
}
/**
* Get album by id from state
* @param {number} id - The id of the album
*/
export function getAlbumById(id) {
  return (dispatch, getState) => {
    const albums = getState().topAlbums;
    const myAlbum = albums.find(album => album.id === id);

    return myAlbum;
  };
}

export function setTopAlbums(topList) {
  const list = formatAlbumData(topList);

  return {
    type: types.SET_TOP_ALBUMS,
    list
  };
}
/**
 * Get top albums from API
 * @param {number} limit - The number of results to be retrieved
 */
export function getTopAlbums(limit) {
  return dispatch => {
    // Resets error (only if an error has already taken place)
    dispatch(resetError('albums'));
    // Body of a query to an existing server
    return Api.get(`/topalbums/limit=${limit}/json`)
      .then(res => {
        if (res.status === 200 && res.data.feed) {
          dispatch(setTopAlbums(res.data.feed.entry));
        } else {
          // Set error
          dispatch(setError('albums', 'Failed to retrieve albums.'));
        }
      })
      .catch(() => {
        // Set error
        dispatch(setError('albums', 'Failed to retrieve albums.'));
      });
  };
}

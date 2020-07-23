import * as types from './types';

/** Forward to reducer */

function updateFavoriteRanks(favorites) {
  return {
    type: types.UPDATE_FAVORITE_RANKS,
    favorites
  };
}

export function addFavorite(album) {
  return {
    type: types.ADD_FAVORITE,
    album
  };
}

export function removeFavorite(id) {
  return {
    type: types.REMOVE_FAVORITE,
    id
  };
}

/**
 * Rankings are constantly change
 * so they need to be updated in the stored favorites
 */
export function setFavoriteRankings() {
  return (dispatch, getState) => {
    const { topAlbums, favorites } = getState().topAlbums;
    // If top albums are retrieved
    if (topAlbums) {
      favorites.forEach(favorite => {
        const element = topAlbums.findIndex(
          topAlbum => favorite.id === topAlbum.id
        );
        if (element > -1) favorites.rank = element + 1;
        else favorites.rank = null;
      });

      updateFavoriteRanks(favorites);
    }
  };
}
/**
 * Add / remove to favorites list
 * @param {boolean} isFavorite - Indicate if album is favorite
 * @param {object} album - The album's details
 */
export function toggleFavorite(isFavorite, album) {
  return dispatch => {
    if (!isFavorite) {
      // If is not favorite: add to favorites
      dispatch(addFavorite(album));
    } else {
      // If is favorite: remove from favorites
      dispatch(removeFavorite(album.id));
    }
  };
}

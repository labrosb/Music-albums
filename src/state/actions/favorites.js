import * as types from './types';

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

// Rankings are constantly change so they need to be updated in the stored favorites
export function setFavoriteRankings() {
  return (dispatch, getState) => {
    const { topAlbums, favorites } = getState().topAlbums;

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

export function toggleFavorite(isFavorite, album) {
  return dispatch => {
    if (!isFavorite) {
      dispatch(addFavorite(album));
    } else {
      dispatch(removeFavorite(album.id));
    }
  };
}

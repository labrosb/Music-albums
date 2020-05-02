import * as types from '../actions/types';

export default function favoritesMap(state = null, action) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return state.concat([action.album.id]);
    case types.REMOVE_FAVORITE:
      return state.filter(item => item !== action.id);

    default:
      return state;
  }
}

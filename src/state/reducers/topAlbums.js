import * as types from '../actions/types';

export default function topAlbums(state = null, action) {
  switch (action.type) {
    case types.SET_TOP_ALBUMS:
      return action.list;

    default:
      return state;
  }
}

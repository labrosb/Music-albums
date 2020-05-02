import * as types from '../actions/types';

export default function favorites(state = null, action) {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return state.concat([action.album]);
    case types.REMOVE_FAVORITE:
      return state.filter(item => item.id !== action.id);
    case types.UPDATE_FAVORITE_RANKS:
      return { ...action.favorites };

    default:
      return state;
  }
}

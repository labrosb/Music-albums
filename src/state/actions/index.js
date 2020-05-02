import * as topAlbums from './topAlbums';
import * as favorites from './favorites';
import * as error from './error';

const ActionCreators = {
  ...topAlbums,
  ...favorites,
  ...error
};

export default ActionCreators;

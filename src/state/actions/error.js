import * as types from './types';

/**
 * Sets Error message
 * @param {string} errorType - The type of error
 * @param {string} errorMsg - The error message
 */
export function setError(errorType, errorMsg) {
  return {
    type: types.SET_ERROR,
    error: errorMsg,
    errorType
  };
}
/**
 * Resets Error message of particular type
 * @param {string} errorType - The type of error
 */
export function resetError(errorType) {
  return (dispatch, getState) => {
    // Check if an error of the given type exists
    const error = getState().error[errorType];
    // if it exists, reset...
    if (error) {
      dispatch(setError(errorType, null));
    }
  };
}

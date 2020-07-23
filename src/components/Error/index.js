import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Common/Header';
import './Error.scss';
/**
 * Error component
 * @component
 * @param {string} header - The title of the header
 * @param {string} active - The active link / root in the header
 * @param {boolean} noBackButton - Indicates if header has back button
 * @param {string} message - The error message
 */
function Error({ header, message, active, noBackButton }) {
  return (
    <>
      <Header title={header} {...{ active, noBackButton }} />
      <div className="error-content">
        <h2 className="error-title">Error!</h2>
        <p className="error-text">{message || 'An error occured!'}</p>
      </div>
    </>
  );
}

export default Error;

Error.propTypes = {
  header: PropTypes.string,
  message: PropTypes.string,
  active: PropTypes.string,
  noBackButton: PropTypes.bool
};

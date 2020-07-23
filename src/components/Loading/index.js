import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Common/Header';
import loadingSpinner from '../../assets/icons/loading.svg';
import './Loading.scss';
/**
 * Loading component
 * @component
 * @param {string} header - The title of the header
 * @param {string} active - The active link / root in the header
 * @param {boolean} noBackButton - Indicates if header has back button
 */
function LoadingContent({ header, active, noBackButton }) {
  return (
    <>
      <Header title={header} {...{ active, noBackButton }} />
      <div className="alt-content">
        <img
          className="spinner-icon"
          src={loadingSpinner}
          alt="Loading..."
        />
      </div>
    </>
  );
}

export default LoadingContent;

LoadingContent.propTypes = {
  header: PropTypes.string,
  active: PropTypes.string,
  noBackButton: PropTypes.bool
};

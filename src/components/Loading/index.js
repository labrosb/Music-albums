import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Common/Header';
import loadingSpinner from '../../assets/icons/loading.svg';
import './Loading.scss';

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

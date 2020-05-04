import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

function Header({ title, active, noBackButton }) {
  const history = useHistory();

  const redirectTop100 = useCallback(() => {
    history.push({ pathname: '/top-100' });
  }, [history]);

  const redirectToFavorites = useCallback(() => {
    history.push({ pathname: '/my-favorites' });
  }, [history]);

  const goBack = useCallback(() => {
    history.goBack();
  }, [history]);

  const renderBackButton = () => {
    if (!noBackButton) {
      return (
        <div
          className="back-button"
          onClick={goBack}
        >
          <FontAwesomeIcon
            className="icon"
            icon={faArrowLeft}
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="header">
      {renderBackButton()}
      <div className="title">
        <h1 className="title-label">
          {title || 'Music'}
        </h1>
        <FontAwesomeIcon
          className="icon"
          icon={faMusic}
        />
      </div>
      <div className="menu">
        <span
          className={`route ${active === 'top100' ? 'active' : ''}`}
          onClick={redirectTop100}
        >
          Top 100
        </span>
        <span
          className={`route ${active === 'favorites' ? 'active' : ''}`}
          onClick={redirectToFavorites}
        >
          My Favorites
        </span>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  active: PropTypes.string,
  noBackButton: PropTypes.bool
};

export default Header;

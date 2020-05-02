import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './FilterBar.scss';

function FilterBar(props) {
  const { data, placeholder, onFiltered } = props;

  const search = ({ target }) => {
    const searchParam = new RegExp(target.value.toUpperCase());
    const results = data.filter(
      album => searchParam.test(album.name.toUpperCase())
    );
    onFiltered(results);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        className="filter-input"
        placeholder={placeholder || 'Search'}
        onChange={search}
      />
      <FontAwesomeIcon
        className="search-icon"
        icon={faSearch}
      />
    </div>
  );
}

FilterBar.propTypes = {
  data: PropTypes.array,
  onFiltered: PropTypes.func,
  placeholder: PropTypes.string
};

export default React.memo(FilterBar);

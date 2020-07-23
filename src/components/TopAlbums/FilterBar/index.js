import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './FilterBar.scss';
/**
 * Filter bar Component
 * @component
 * params - Declared in propTypes
 */
function FilterBar({ data, placeholder, onFiltered }) {
  /**
   * Filter function triggered on type
   * @param {function} target - The title of the button
   */
  const filter = ({ target }) => {
    // Search parameter: Typed input
    const searchParam = new RegExp(target.value.toUpperCase());
    // Filtering: Parameter and data converted to uppercase
    // to provide a case sensitive free filtering
    const results = data.filter(album => (
      searchParam.test(album.name.toUpperCase())
    ));
    // Emit results to parent
    onFiltered(results);
  };

  return (
    <div className="filter-container">
      <input
        type="text"
        className="filter-input"
        placeholder={placeholder || 'Search'}
        onChange={filter}
      />
      <FontAwesomeIcon
        className="search-icon"
        icon={faSearch}
      />
    </div>
  );
}

FilterBar.propTypes = {
  /** Array: Array with data to be filtered */
  data: PropTypes.array,
  /** Callback Func: Action to take place after filtering */
  onFiltered: PropTypes.func,
  /** String: Filter placeholder text */
  placeholder: PropTypes.string
};

export default React.memo(FilterBar);

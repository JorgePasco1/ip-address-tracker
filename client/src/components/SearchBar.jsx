import Proptypes from 'prop-types';
import { useEffect, useState } from 'react';

import { ReactComponent as RightArrowIcon } from '../icons/icon-arrow.svg';
import './SearchBar.css';

const SearchBar = ({ initialValue, onSubmit, disabled }) => {
  const [inputText, setInputText] = useState(initialValue);

  useEffect(() => {
    setInputText(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputText);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        placeholder={disabled ? 'Loading...' : 'Enter an IP address to start'}
        value={inputText}
        onChange={handleInputChange}
        disabled={disabled}
      />
      <button>
        <RightArrowIcon />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: Proptypes.func,
  initialValue: Proptypes.string,
  disabled: Proptypes.bool,
};

SearchBar.defaultProps = {
  onSubmit: () => {
    console.log('onSubmit');
  },
  initialValue: '',
  disabled: false,
};

export default SearchBar;

import Proptypes from 'prop-types';
import { useState } from 'react';

import { ReactComponent as RightArrowIcon } from '../icons/icon-arrow.svg';
import './SearchBar.css';

const SearchBar = ({ initialValue, onSubmit }) => {
  const [inputText, setInputText] = useState(initialValue);

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
        placeholder="Enter an IP address to start"
        value={inputText}
        onChange={handleInputChange}
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
};

SearchBar.defaultProps = {
  onSubmit: () => {
    console.log('onSubmit');
  },
  initialValue: '',
};

export default SearchBar;

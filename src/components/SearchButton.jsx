import React, { useState } from 'react';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function SearchButton() {
  const [shouldShowSearchBar, setShouldShowSearchBar] = useState(false);

  return (
    <div>
      <input
        type="image"
        src={ searchIcon }
        alt="Profile"
        onClick={ () => setShouldShowSearchBar((prevState) => !prevState) }
        data-testid="search-top-btn"
      />
      { shouldShowSearchBar && <SearchBar /> }
    </div>
  );
}

export default SearchButton;

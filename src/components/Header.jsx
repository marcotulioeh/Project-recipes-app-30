import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const [shouldShowSearchBar, setShouldShowSearchBar] = useState(false);

  return (
    <>
      <header>
        <button type="button">
          <Link to="/profile">
            <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
          </Link>
        </button>
        <h1 data-testid="page-title">{title}</h1>
        <button
          type="button"
          onClick={ () => setShouldShowSearchBar((prevState) => !prevState) }
        >
          <img src={ searchIcon } alt="Search" data-testid="search-top-btn" />
        </button>
      </header>
      { shouldShowSearchBar && <SearchBar /> }
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;

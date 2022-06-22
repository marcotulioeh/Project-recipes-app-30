import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  return (
    <div>
      <header>
        <button type="button">
          <Link to="/profile">
            <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
          </Link>
        </button>
        <h1 data-testid="page-title">{title}</h1>
        <button type="button">
          <img src={ searchIcon } alt="Search" data-testid="search-top-btn" />
        </button>
      </header>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;

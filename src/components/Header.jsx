import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';

function Header({ title }) {
  return (
    <header>
      <button type="button">
        <Link to="/profile">
          <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
        </Link>
      </button>
      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;

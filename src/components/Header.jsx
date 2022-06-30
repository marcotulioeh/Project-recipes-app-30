import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';

function Header({ title }) {
  const history = useHistory();

  const nextPage = () => {
    history.push('/profile');
  };

  return (
    <header>
      <input
        type="image"
        src={ profileIcon }
        alt="Profile"
        onClick={ nextPage }
        data-testid="profile-top-btn"
      />
      <h1 data-testid="page-title">{title}</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;

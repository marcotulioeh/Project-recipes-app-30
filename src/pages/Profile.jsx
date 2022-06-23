import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Profile() {
  const userEmail = JSON.parse(localStorage.user).email;

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <h3 data-testid="profile-email">{userEmail}</h3>
      <Link to="/done-recipes">
        <button type="button" data-testid="profile-done-btn">Done Recipes</button>
      </Link>
      <Link to="/favorite-recipes">
        <button type="button" data-testid="profile-favorite-btn">Favorite Recipes</button>
      </Link>
      <Link to="/">
        <button
          type="button"
          onClick={ handleLogout }
          data-testid="profile-logout-btn"
        >
          Logout
        </button>
      </Link>
      <Footer />
    </div>
  );
}

export default Profile;

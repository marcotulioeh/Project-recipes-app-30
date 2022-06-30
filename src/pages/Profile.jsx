import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Profile() {
  const emailValidation = () => {
    const userEmail = JSON.parse(localStorage.getItem('user'));
    try {
      if (userEmail === null) {
        return 'test@test.com';
      }
      return userEmail.email;
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <Header title="Profile" />
      <h3 data-testid="profile-email">{emailValidation()}</h3>
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

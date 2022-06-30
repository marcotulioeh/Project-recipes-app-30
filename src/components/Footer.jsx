import React from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../style/Footer.css';

function Footer() {
  return (
    <footer data-testid="footer" className="inferior-menu">
      <Link to="/drinks ">
        <img src={ drinkIcon } alt="drinksIcon" data-testid="drinks-bottom-btn" />
      </Link>

      <Link to="/explore">
        <img src={ exploreIcon } alt="exploreIcon" data-testid="explore-bottom-btn" />
      </Link>

      <Link to="/foods">
        <img src={ mealIcon } alt="mealIcon" data-testid="food-bottom-btn" />
      </Link>
    </footer>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import exploreIcon from '../images/exploreIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/drinks ">
          <img src={ drinkIcon } alt="drinksIcon" data-testid="drinks-bottom-btn" />
        </Link>
      </div>
      <div>
        <Link to="/explore">
          <img src={ exploreIcon } alt="exploreIcon" data-testid="explore-bottom-btn" />
        </Link>
      </div>
      <div>
        <Link to="/foods">
          <img src={ mealIcon } alt="mealIcon" data-testid="food-bottom-btn" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeAppContext from '../context/RecipeAppContext';
import RecipeCard from '../components/RecipeCard';

function Mainpage() {
  const {
    foods: { filteredMeals }, drinks: { filteredDrinks },
  } = useContext(RecipeAppContext);

  const history = useHistory();

  return (
    <div>
      { history.location.pathname === '/foods' && (
        <div>
          { filteredMeals.length !== 0 && filteredMeals
            .map(({ strMealThumb, strMeal }, index) => (
              <RecipeCard
                props={ { image: strMealThumb, name: strMeal, index } }
                key={ index }
              />))}
        </div>
      ) }
      { history.location.pathname === '/drinks' && (
        <div>
          { filteredDrinks.length !== 0 && filteredDrinks
            .map(({ strDrinkThumb, strDrink }, index) => (
              <RecipeCard
                props={ { image: strDrinkThumb, name: strDrink, index } }
                key={ index }
              />))}
        </div>
      ) }
    </div>
  );
  // requisito 25 em diante~
}

export default Mainpage;

import React, { useEffect, useState } from 'react';
import DoneRecipeFood from '../components/DoneRecipeFood';
import DoneRecipeDrink from '../components/DoneRecipeDrink';

function DoneRecipesPage() {
  const [doneRecipe, setDoneRecipe] = useState([]);
  const [allowedFood, setAllowedFood] = useState(true);
  const [allowedDrink, setAllowedDrink] = useState(true);
  const [drinkPosition, setDrinkPosition] = useState(1);
  const foodFilter = () => {
    setAllowedDrink(false);
    setDrinkPosition(1);
    if (!allowedFood) {
      setAllowedFood(true);
    }
  };
  const drinkFilter = () => {
    setAllowedFood(false);
    setDrinkPosition(0);
    if (!allowedDrink) {
      setAllowedDrink(true);
    }
  };
  const allFilter = () => {
    setDrinkPosition(1);
    setAllowedDrink(true);
    setAllowedFood(true);
  };
  useEffect(() => {
    const doneRecipes = [
      {
        id: '52771',
        type: 'food',
        nationality: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        doneDate: '23/06/2020',
        tags: ['Pasta', 'Curry'],
      },
      {
        id: '178319',
        type: 'drink',
        nationality: '',
        category: 'Cocktail',
        alcoholicOrNot: 'Alcoholic',
        name: 'Aquamarine',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
        doneDate: '23/06/2020',
        tags: [],
      },
    ];
    setDoneRecipe(doneRecipes);
  }, []);
  return (
    <main>
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ allFilter }
      >
        All

      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ foodFilter }
      >
        Food

      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ drinkFilter }
      >
        Drinks

      </button>
      {doneRecipe.length && allowedFood && <DoneRecipeFood food={ doneRecipe[0] } />}
      {doneRecipe.length && allowedDrink && <DoneRecipeDrink
        drink={ doneRecipe[1] }
        position={ drinkPosition }
      />}
    </main>
  );
}

export default DoneRecipesPage;

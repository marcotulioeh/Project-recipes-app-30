import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeAppContext from '../context/RecipeAppContext';
import RecipeCard from '../components/RecipeCard';
import CategoryButton from '../components/CategoryButton';

function Mainpage() {
  const {
    foods: { filteredMeals },
    drinks: { filteredDrinks },
    categories: {
      mealCategoryFilters,
      drinkCategoryFilters,
    },
    filtering: {
      setCurrentFilter,
    },
  } = useContext(RecipeAppContext);

  const history = useHistory();

  return (
    <>
      { mealCategoryFilters.length !== 0 && (
        <section>
          { history.location.pathname === '/foods' && (mealCategoryFilters
            .map((mealCategory, index) => (
              <CategoryButton
                key={ index }
                props={ { categoryName: mealCategory.strCategory } }
              />)))}
        </section>)}
      { drinkCategoryFilters.length !== 0 && (
        <section>
          { history.location.pathname === '/drinks' && (drinkCategoryFilters
            .map((drinkCategory, index) => (
              <CategoryButton
                key={ index }
                props={ { categoryName: drinkCategory.strCategory } }
              />)))}
        </section>)}
      <button
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setCurrentFilter('') }
      >
        All
      </button>
      { history.location.pathname === '/foods' && (
        <div>
          { filteredMeals.length !== 0 && filteredMeals
            .map(({ strMealThumb, strMeal, idMeal }, index) => (
              <RecipeCard
                props={ {
                  image: strMealThumb, name: strMeal, index, id: idMeal, page: 'foods' } }
                key={ index }
              />))}
        </div>
      ) }
      { history.location.pathname === '/drinks' && (
        <div>
          { filteredDrinks.length !== 0 && filteredDrinks
            .map(({ strDrinkThumb, strDrink, idDrink }, index) => (
              <RecipeCard
                props={ {
                  image: strDrinkThumb,
                  name: strDrink,
                  index,
                  id: idDrink,
                  page: 'drinks' } }
                key={ index }
              />))}
        </div>
      ) }
    </>
  );
  // requisito 25 em diante~
}

export default Mainpage;

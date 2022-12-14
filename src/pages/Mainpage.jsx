import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeAppContext from '../context/RecipeAppContext';
import RecipeCard from '../components/RecipeCard';
import CategoryButton from '../components/CategoryButton';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchButton from '../components/SearchButton';

function Mainpage() {
  const {
    foods: { filteredMeals },
    drinks: { filteredDrinks },
    categories: {
      mealCategoryFilters,
      drinkCategoryFilters,
    },
    filtering: {
      currentFilter,
      setCurrentFilter,
    },
  } = useContext(RecipeAppContext);

  const history = useHistory();
  const { location: { pathname } } = history;

  const redirectIfOnlyOneRecipe = (recipeId) => {
    history.push(`${pathname}/${recipeId}`);
  };

  return (
    <>
      <Header title={ pathname === '/foods' ? 'Foods' : 'Drinks' } />
      <SearchButton />
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
          { filteredMeals.length === 1 && currentFilter === ''
            && redirectIfOnlyOneRecipe(filteredMeals[0].idMeal) }
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
          { filteredDrinks.length === 1 && currentFilter === ''
            && redirectIfOnlyOneRecipe(filteredDrinks[0].idDrink) }
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
      <Footer />
    </>
  );
  // requisito 25 em diante~
}

export default Mainpage;

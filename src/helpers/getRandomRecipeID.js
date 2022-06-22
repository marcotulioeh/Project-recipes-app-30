const ENDPOINT_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const ENDPOINT_DRINK = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const getRandomRecipeID = async () => {
  const requestMeal = await fetch(ENDPOINT_MEAL);
  const meal = await requestMeal.json();
  const requestDrink = await fetch(ENDPOINT_DRINK);
  const drink = await requestDrink.json();

  return {
    randomMealId: meal.meals[0].idMeal,
    randomDrinkId: drink.drinks[0].idDrink,
  };
};

export default getRandomRecipeID;

export function saveFoodInLocalStorage(doneRecipes, type) {
  if (type === 'food') {
    const foodToSave = [{
      id: `${doneRecipes.idMeal}`,
      type,
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(foodToSave));
  } else {
    const drinkToSave = [{
      id: `${doneRecipes.idDrink}`,
      type,
    }];
    localStorage.setItem('doneRecipes', JSON.stringify(drinkToSave));
  }
}

export function checkSavedFood(id) {
  const savedFood = JSON.parse(localStorage.getItem('doneRecipes'));
  if (savedFood) {
    return (id === savedFood[0].id);
  }
}

export function continueFoodRecipe(id, details) {
  const inProgressRecipes = {
    meals: {
      [id]: [details],
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
}

export function continueDrinkRecipe(id, details) {
  const inProgressRecipes = {
    cocktails: {
      [id]: [details],
    },
  };
  localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
}

export function checkFoodContinueRecipe(id) {
  const checkContinueFoodRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (checkContinueFoodRecipe && checkContinueFoodRecipe.meals
    && checkContinueFoodRecipe.meals[id]) {
    return true;
  }
  return false;
}

export function checkDrinkContinueRecipe(id) {
  const checkContinueDrinkRecipe = JSON.parse(localStorage.getItem('inProgressRecipes'));
  if (checkContinueDrinkRecipe && checkContinueDrinkRecipe.cocktails
    && checkContinueDrinkRecipe.cocktails[id]) {
    return true;
  }
  return false;
}

export function favoriteFoodInLocalStorage(details) {
  const favoriteRecipes = [{
    id: `${details.idMeal}`,
    type: 'food',
    nationality: `${details.strArea}`,
    category: `${details.strCategory}`,
    alcoholicOrNot: '',
    name: `${details.strMeal}`,
    image: `${details.strMealThumb}`,
  }];
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
}

export function removeItemlocalStorage(key) {
  localStorage.removeItem(key);
}

export function checkFavoriteFoodItem(id) {
  const favoriteFoodItem = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteFoodItem) {
    return favoriteFoodItem[0].id === id;
  }
}

export function favoriteDrinkInLocalStorage(details) {
  const favoriteRecipes = [{
    id: `${details.idDrink}`,
    type: 'drink',
    nationality: '',
    category: `${details.strCategory}`,
    alcoholicOrNot: `${details.strAlcoholic}`,
    name: `${details.strDrink}`,
    image: `${details.strDrinkThumb}`,
  }];
  localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
}

export function checkFavoriteDrinktem(id) {
  const favoriteDrinkItem = JSON.parse(localStorage.getItem('favoriteRecipes'));
  if (favoriteDrinkItem) {
    return favoriteDrinkItem[0].id === id;
  }
}

export function favoriteFoodPageProgress(details) {
  const favoriteRecipes = [{
    id: `${details.idMeal}`,
    type: 'food',
    nationality: `${details.strArea}`,
    category: `${details.strCategory}`,
    alcoholicOrNot: '',
    name: `${details.strMeal}`,
    image: `${details.strMealThumb}`,
  }];
  localStorage.setItem('favoriteFood', JSON.stringify(favoriteRecipes));
}

export function favoriteDrinkPageProgress(details) {
  const favoriteRecipes = [{
    id: `${details.idDrink}`,
    type: 'drink',
    nationality: '',
    category: `${details.strCategory}`,
    alcoholicOrNot: `${details.strAlcoholic}`,
    name: `${details.strDrink}`,
    image: `${details.strDrinkThumb}`,
  }];
  localStorage.setItem('favoriteDrink', JSON.stringify(favoriteRecipes));
}

export function getFavoriteRecipesFromLocalStorange() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return favoriteRecipes;
}

export function removeFavoriteRecipesFromLocalStorange(recipeRemoved) {
  const newFavoriteRecipes = getFavoriteRecipesFromLocalStorange()
    .filter((recipe) => recipe.id !== recipeRemoved.id);
  localStorage.setItem('favoriteRecipes', JSON.stringify(newFavoriteRecipes));
}

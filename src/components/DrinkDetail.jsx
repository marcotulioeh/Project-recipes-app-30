import React, { useEffect, useState } from 'react';
import propTypes, { objectOf } from 'prop-types';
import { useHistory } from 'react-router-dom';
import RecommendationCard from './RecommendationCard';
import '../style/style.css';
import { checkSavedFood,
  checkDrinkContinueRecipe,
  favoriteDrinkInLocalStorage,
  checkFavoriteDrinktem,
  continueDrinkRecipe } from '../helpers/recipeLocalStorage';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function DrinkDetail({ details }) {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [favorited, setFavorited] = useState(false);
  const [copied, setCopied] = useState(false);
  const [alreadyStarted, setAlreadyStarted] = useState(false);
  const [alreadySaved, setDrinkToLocalStorage] = useState(false);
  const [drinkIngredients, setIngredients] = useState([]);
  const [foodForRecommend, setfoodForRecommend] = useState([]);
  const [measuresOfIngredients, setMeasuresOfIngredients] = useState([]);
  const fetchingMealsForRecommendation = async () => {
    const maxOfMeals = 5;
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const meals = await result.json();
    const mealsForRec = await meals.meals.filter((meal, index) => index <= maxOfMeals);
    setfoodForRecommend(mealsForRec);
  };
  useEffect(() => {
    const entries = Object.entries(details);
    const ingredients = entries.filter((item) => item[0].includes('strIngredient')
      && item[1]);
    const measures = entries.filter((item) => item[0].includes('strMeasur') && item[1]);
    fetchingMealsForRecommendation();
    setIngredients(ingredients);
    setMeasuresOfIngredients(measures);
  }, [details]);
  useEffect(() => {
    if (details.length === undefined) {
      setDrinkToLocalStorage(checkSavedFood(id));
      setAlreadyStarted(checkDrinkContinueRecipe(id));
      setFavorited(checkFavoriteDrinktem(id));
    }
  }, [details, id]);
  const startRecipeClick = () => {
    continueDrinkRecipe(id, details);
    history.push(`/drinks/${id}/in-progress`);
  };
  const copyRecipe = async () => {
    await navigator.clipboard.writeText(`http://localhost:3000/drinks/${id}`);
    setCopied(true);
  };
  const favoriteDrink = () => {
    favoriteDrinkInLocalStorage(details);
    setFavorited(true);
  };
  const disfavor = () => {
    setFavorited(false);
  };
  return (
    <div>
      <img
        src={ details.strDrinkThumb }
        alt=""
        data-testid="recipe-photo"
        width="200px"
      />
      <h1 data-testid="recipe-title">{details.strDrink}</h1>
      <p data-testid="recipe-category">{details.strAlcoholic}</p>
      <input
        type="image"
        src={ shareIcon }
        data-testid="share-btn"
        alt="Share"
        onClick={ copyRecipe }
      />
      {copied && <h2>Link copied!</h2>}
      {favorited ? (
        <input
          type="image"
          src={ blackHeartIcon }
          data-testid="favorite-btn"
          alt="favorited"
          onClick={ disfavor }
        />
      ) : (
        <input
          type="image"
          src={ whiteHeartIcon }
          data-testid="favorite-btn"
          alt="favorited"
          onClick={ favoriteDrink }
        />
      )}
      <p>{details.strCategory}</p>
      <h3>Ingredients</h3>
      <ol>
        {drinkIngredients.map((ingredient, index) => (
          <li
            key={ `${ingredient}` }
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {`${ingredient[1]} - ${measuresOfIngredients[index]
              && measuresOfIngredients[index][1]}`}

          </li>
        ))}
      </ol>
      <h2>Instructions</h2>
      <p data-testid="instructions">{details.strInstructions}</p>
      <h3>Recommendeds</h3>
      <div className="recommendationSection">
        {foodForRecommend
          .map(({ idMeal, strMeal, strMealThumb, strCategory }, index) => (
            <RecommendationCard
              key={ idMeal }
              id={ idMeal }
              index={ index }
              recommendationType={ strCategory }
              recommendationTitle={ strMeal }
              recommendationImage={ strMealThumb }
              endPoint="foods"
            />
          ))}
      </div>
      {!alreadySaved && (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="start-button"
          onClick={ startRecipeClick }
        >
          {alreadyStarted ? 'Continue Recipe' : 'Start Recipe'}

        </button>)}
    </div>
  );
}

DrinkDetail.propTypes = {
  details: propTypes.shape(objectOf).isRequired,
};

export default DrinkDetail;

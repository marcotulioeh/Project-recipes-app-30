import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecommendationCard from '../components/RecommendationCard';
import getDetailsFromItem, { getRecommendedDrinks } from '../helpers/DetailsAPI';
import '../style/style.css';
import { checkSavedFood,
  checkFoodContinueRecipe,
  favoriteFoodInLocalStorage,
  checkFavoriteFoodItem,
  continueFoodRecipe } from '../helpers/recipeLocalStorage';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function FoodPage() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const INITIAL_STATE = {
    foodDetails: [],
    foodIngredients: [],
  };
  const [favorited, setFavorited] = useState(false);
  const [copied, setCopied] = useState(false);
  const [alreadyStarted, setAlreadyStarted] = useState(false);
  const [alreadySaved, setFoodToLocalStorage] = useState(false);
  const [detailsFromItem, setDetailsFromItem] = useState(INITIAL_STATE);
  const [drinksForRecommendations, setdrinksForRecommendations] = useState([]);
  const fetchingDrinksForRecommendation = async () => {
    const maxOfDrinks = 5;
    const drinks = await getRecommendedDrinks('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const drinksForRec = await drinks.filter((drink, index) => index <= maxOfDrinks);
    setdrinksForRecommendations(drinksForRec);
  };

  useEffect(() => {
    const getDetails = async () => {
      const result = await getDetailsFromItem(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      fetchingDrinksForRecommendation();
      const entries = Object.entries(result[0]);
      const ingredients = entries.filter((item) => item[0].includes('strIngredient')
      && item[1]);
      const measures = entries.filter((item) => item[0].includes('strMeasur') && item[1]);
      setDetailsFromItem({ foodDetails:
        result[0],
      foodIngredients: ingredients,
      foodMeasures: measures });
    };
    getDetails();
  }, [history, id]);
  useEffect(() => {
    if (detailsFromItem.foodDetails.length === undefined) {
      setFoodToLocalStorage(checkSavedFood(id));
      setAlreadyStarted(checkFoodContinueRecipe(id));
      setFavorited(checkFavoriteFoodItem(id));
    }
  }, [detailsFromItem, id]);
  const startRecipeClick = () => {
    continueFoodRecipe(id, detailsFromItem.foodDetails);
    history.push(`/foods/${id}/in-progress`);
  };
  const copyRecipe = async () => {
    await navigator.clipboard.writeText(`http://localhost:3000/foods/${id}`);
    setCopied(true);
  };
  const favoriteFood = () => {
    favoriteFoodInLocalStorage(detailsFromItem.foodDetails);
    setFavorited(true);
  };
  const disfavor = () => {
    setFavorited(false);
  };
  const { strMealThumb, strMeal, strCategory,
    strInstructions, strYoutube } = detailsFromItem.foodDetails;
  return (
    <div>
      <div>
        <img
          src={ strMealThumb }
          alt=""
          data-testid="recipe-photo"
          width="200px"
        />
        <h1 data-testid="recipe-title">{strMeal}</h1>
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
            onClick={ favoriteFood }
          />
        )}
        <p data-testid="recipe-category">{strCategory}</p>
        <h3>Ingredients</h3>
        <ol>
          {detailsFromItem.foodIngredients.map((ingredient, index) => (
            <li
              key={ index }
              data-testid={ `${index}-ingredient-name-and-measure` }
            >
              {`${ingredient[1]} - ${detailsFromItem.foodMeasures[index][1]}`}

            </li>
          ))}
        </ol>
        <h2>Instructions</h2>
        <p data-testid="instructions">{strInstructions}</p>
        <video src={ strYoutube } data-testid="video">
          <track default kind="captions" />
        </video>
      </div>
      <div className="recommendationSection">
        {drinksForRecommendations
          .map(({ idDrink, strDrink, strDrinkThumb, strAlcoholic }, index) => (
            <RecommendationCard
              key={ idDrink }
              id={ idDrink }
              index={ index }
              recommendationType={ strAlcoholic }
              recommendationTitle={ strDrink }
              recommendationImage={ strDrinkThumb }
              endPoint="drinks"
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

export default FoodPage;

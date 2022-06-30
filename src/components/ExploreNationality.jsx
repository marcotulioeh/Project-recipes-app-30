import React, { useState, useEffect } from 'react';
import retrieveRecipeAPIData from '../helpers/RecipesAPI';
// import RecipeAppContext from '../context/RecipeAppContext';
import RecipeCard from './RecipeCard';

function ExploreNationality() {
  const [allNationalities, setAllNationalities] = useState([]);
  const [whichRecipeToShow, setWhichRecipeToShow] = useState('all');
  const [recipesToShow, setRecipesToShow] = useState([]);

  useEffect(() => {
    const retrieveNationalitiesFromAPI = async () => {
      // const maxDropdownOptions = 12;
      const nationalitiesURL = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';
      const APIReturn = await retrieveRecipeAPIData(nationalitiesURL);
      const nationalities = APIReturn.meals
        .map(({ strArea }) => strArea);
        // .filter((_element, nationalityIndex) => nationalityIndex < maxDropdownOptions);
      setAllNationalities(nationalities);
    };
    retrieveNationalitiesFromAPI();
  }, []);
  // console.log('apireturn', allNationalities);

  const handleDropdownChange = ({ target }) => {
    setWhichRecipeToShow(target.value);
  };

  useEffect(() => {
    const maxRecipesPerPage = 12;
    const URLToUse = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${whichRecipeToShow}`;
    const retrieveRecipesByNationality = async (url) => {
      const APIReturn = await retrieveRecipeAPIData(url);
      const filteredRecipes = APIReturn.meals
        .filter((_element, index) => index < maxRecipesPerPage);
      setRecipesToShow(filteredRecipes);
    };
    if (whichRecipeToShow !== '' && whichRecipeToShow !== 'all') {
      retrieveRecipesByNationality(URLToUse);
    }
    if (whichRecipeToShow === 'all') {
      retrieveRecipesByNationality('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
  }, [whichRecipeToShow]);

  // console.log('ignore this', mealRecipes);
  // console.log('whichRecipeToShow', whichRecipeToShow);
  console.log('receitas que chegaram', recipesToShow);

  return (
    <>
      { allNationalities.length !== 0 && (
        <section>
          <select
            data-testid="explore-by-nationality-dropdown"
            value={ whichRecipeToShow }
            onChange={ (event) => handleDropdownChange(event) }
          >
            <option value="all" data-testid="All-option">All</option>
            { allNationalities.map((nationality, index) => (
              <option
                key={ index }
                data-testid={ `${nationality}-option` }
                value={ nationality }
              >
                { nationality }
              </option>)) }
          </select>
        </section>
      )}
      { recipesToShow.length !== 0 && (
        <section>
          { recipesToShow.map(({ strMealThumb, strMeal, idMeal }, index) => (
            <RecipeCard
              props={ {
                image: strMealThumb, name: strMeal, index, id: idMeal, page: 'foods' } }
              key={ index }
            />)) }
        </section>)}
    </>
  );
}

export default ExploreNationality;

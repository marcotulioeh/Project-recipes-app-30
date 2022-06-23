import { string } from 'prop-types';
import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeAppContext from '../context/RecipeAppContext';

function SearchBar() {
  const { searching: { setSearchFilters, searchResult } } = useContext(RecipeAppContext);
  const [filterType, setFilterType] = useState('');
  const [filterString, setFilterString] = useState('');
  const history = useHistory();

  const sendSearchFiltersToContext = () => {
    const newSearchFilters = {
      type: filterType,
      string: filterString,
      recipeType: history.location.pathname,
    };
    setSearchFilters(newSearchFilters);
    if (newSearchFilters.type === 'First letter' && string.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  useEffect(() => {
    if (searchResult.recipes === null) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [searchResult]);

  const handleRadioButtonsChange = ({ target }) => {
    if (target.checked) {
      setFilterType(target.value);
    }
  };

  return (
    <section>
      <input
        type="text"
        data-testid="search-input"
        value={ filterString }
        onChange={ ({ target }) => setFilterString(target.value) }
      />

      <label htmlFor="ingredient-input">
        Ingredient
        <input
          type="radio"
          name="filter-type"
          id="ingredient-input"
          data-testid="ingredient-search-radio"
          value="Ingredient"
          onChange={ (event) => handleRadioButtonsChange(event) }
        />
      </label>
      <label htmlFor="name-input">
        Name
        <input
          type="radio"
          name="filter-type"
          id="name-input"
          data-testid="name-search-radio"
          value="Name"
          onChange={ (event) => handleRadioButtonsChange(event) }
        />
      </label>
      <label htmlFor="first-letter-input">
        First letter
        <input
          type="radio"
          name="filter-type"
          id="first-letter-input"
          data-testid="first-letter-search-radio"
          value="First letter"
          onChange={ (event) => handleRadioButtonsChange(event) }
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => sendSearchFiltersToContext() }
      >
        Search

      </button>

    </section>);
}

export default SearchBar;

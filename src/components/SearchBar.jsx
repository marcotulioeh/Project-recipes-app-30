import React from 'react';

function SearchBar() {
  return (
    <section>
      <input type="text" name="" id="" />

      <label htmlFor="ingredient-input">
        Ingredient
        <input
          type="radio"
          name="filter-type"
          id="ingredient-input"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label htmlFor="name-input">
        Name
        <input
          type="radio"
          name="filter-type"
          id="name-input"
          data-testid="name-search-radio"
        />
      </label>
      <label htmlFor="first-letter-input">
        First Letter
        <input
          type="radio"
          name="filter-type"
          id="first-letter-input"
          data-testid="first-letter-search-radio"
        />
      </label>

      <button type="button" data-testid="exec-search-btn">Search</button>

    </section>);
}

export default SearchBar;

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DrinkDetail from '../components/DrinkDetail';
import { getDetailsFromDrinks } from '../helpers/DetailsAPI';

function DrinkPage() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[2];
  const [drink, setDrink] = useState([]);
  useEffect(() => {
    const getDrinks = async () => {
      const data = await getDetailsFromDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      setDrink(data[0]);
    };
    getDrinks();
  }, [history, id]);
  return (
    <div>
      <DrinkDetail details={ drink } />
    </div>
  );
}

export default DrinkPage;

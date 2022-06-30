import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Explore from './pages/Explore';
// import ExploreFoodsOrDrinks from './pages/ExploreFoodsOrDrinks';
import Profile from './pages/Profile';
import Mainpage from './pages/Mainpage';
import FavoriteRecipes from './pages/FavoriteRecipes';
// import ProgressPage from './pages/ProgressPage';
import FoodPage from './pages/FoodPage';
import DrinkPage from './pages/DrinkPage';
import NotFound from './pages/NotFound';
import DoneRecipes from './pages/DoneRecipes';

function App() {
  return (
    <Switch>
      <Route exact path="/explore/drinks/nationalities" component={ NotFound } />
      <Route path="/explore/foods/nationalities" component={ Explore } />
      <Route path="/explore/foods/ingredients" component={ Explore } />
      <Route path="/explore/drinks/ingredients" component={ Explore } />
      <Route path="/explore/foods" component={ Explore } />
      <Route path="/explore/drinks" component={ Explore } />
      <Route path="/explore" component={ Explore } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route path="/drinks/:id-da-receita/in-progress" />
      <Route path="/foods/:id-da-receita/in-progress" />
      <Route path="/foods/:id" component={ FoodPage } />
      <Route path="/drinks/:id" component={ DrinkPage } />
      <Route path="/foods" component={ Mainpage } />
      <Route path="/drinks" component={ Mainpage } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;

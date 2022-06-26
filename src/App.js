import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Explore from './pages/Explore';
import ExploreFoodsOrDrinks from './pages/ExploreFoodsOrDrinks';
import Profile from './pages/Profile';
import Mainpage from './pages/Mainpage';
import FavoriteRecipes from './pages/FavoriteRecipes';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* Rotas abaixo ainda serão implementadas, só um esqueleto */}
      <Route path="/foods" component={ Mainpage } />
      <Route path="/drinks" component={ Mainpage } />
      <Route path="/foods/:id-da-receita" />
      <Route path="/drinks/:id-da-receita" />
      <Route path="/foods/:id-da-receita/in-progress" />
      <Route path="/drinks/:id-da-receita/in-progress" />
      <Route
        path="/explore/foods"
        render={ (props) => <ExploreFoodsOrDrinks { ...props } /> }
      />
      <Route
        path="/explore/drinks"
        render={ (props) => <ExploreFoodsOrDrinks { ...props } /> }
      />
      <Route path="/explore/foods/ingredients" />
      <Route path="/explore/drinks/ingredients" />
      <Route path="/explore/foods/nationalities" />
      <Route path="/explore" render={ (props) => <Explore { ...props } /> } />
      <Route path="/profile" />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" />
      <Route
        path="/favorite-recipes"
        render={ (props) => <FavoriteRecipes { ...props } /> }
      />
    </Switch>
  );
}

export default App;

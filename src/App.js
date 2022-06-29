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
import FoodPage from './pages/FoodPage';
import DrinkPage from './pages/DrinkPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* Rotas abaixo ainda serão implementadas, só um esqueleto */}
      <Route path="/foods/:id" component={ FoodPage } />
      <Route path="/drinks/:id" component={ DrinkPage } />
      <Route path="/foods" component={ Mainpage } />
      <Route path="/drinks" component={ Mainpage } />
      <Route path="/foods/:id-da-receita/in-progress" />
      <Route path="/drinks/:id-da-receita/in-progress" />
      <Route
        path="/explore/foods"
        component={ Explore }
      />
      <Route
        path="/explore/drinks"
        component={ Explore }
      />
      <Route path="/explore/foods/ingredients" component={ Explore } />
      <Route path="/explore/drinks/ingredients" component={ Explore } />
      <Route path="/explore/foods/nationalities" component={ Explore } />
      <Route path="/explore" render={ (props) => <Explore { ...props } /> } />
      <Route exact path="/explore/drinks/nationalities" component={ NotFound } />
      <Route path="/explore/foods/nationalities" component={ Explore } />
      <Route path="/explore/foods/ingredients" component={ Explore } />
      <Route path="/explore/drinks/ingredients" component={ Explore } />
      <Route path="/explore/foods" component={ Explore } />
      <Route path="/explore/drinks" component={ Explore } />
      <Route path="/explore" component={ Explore } />
      <Route path="/profile" />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" />
      <Route path="/favorite-recipes" />
      <Route path="/drinks/:id-da-receita/in-progress" />
      <Route path="/foods/:id-da-receita/in-progress" />
      <Route path="/drinks/:id-da-receita" />
      <Route path="/foods/:id-da-receita" />
      <Route path="/foods" component={ Mainpage } />
      <Route path="/drinks" component={ Mainpage } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;

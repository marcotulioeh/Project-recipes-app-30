import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ (props) => <Login { ...props } /> } />
      {/* Rotas abaixo ainda serão implementadas, só um esqueleto */}
      <Route path="/foods" />
      <Route path="/drinks" />
      <Route path="/foods/:id-da-receita" />
      <Route path="/drinks/:id-da-receita" />
      <Route path="/foods/:id-da-receita/in-progress" />
      <Route path="/drinks/:id-da-receita/in-progress" />
      <Route path="/explore" />
      <Route path="/explore/foods" />
      <Route path="/explore/drinks" />
      <Route path="/explore/foods/ingredients" />
      <Route path="/explore/drinks/ingredients" />
      <Route path="/explore/foods/nationalities" />
      <Route path="/profile" />
      <Route path="/done-recipes" />
      <Route path="/favorite-recipes" />
    </Switch>
  );
}

export default App;

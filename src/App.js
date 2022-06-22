import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Mainpage from './pages/Mainpage';

function App() {
  return (
<<<<<<< HEAD
    <div className="meals">
      <span className="logo">TRYBE </span>
      <object
        className="rocksGlass"
        type="image/svg+xml"
        data={ rockGlass }
      >
        Glass
      </object>
    </div>
=======
    <Switch>
      <Route exact path="/" component={ Login } />
      {/* Rotas abaixo ainda serão implementadas, só um esqueleto */}
      <Route path="/foods" component={ Mainpage } />
      <Route path="/drinks" component={ Mainpage } />
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
>>>>>>> main-group-12
  );
}

export default App;

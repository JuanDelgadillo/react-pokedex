import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';

import Pokemon from '../components/Pokemon';
import Pokedex from '../components/Pokedex';
import Main from '../components/Main';

const routes = (
  <Router history={ hashHistory }>
    <Route path='/' component={ Main }>
      <IndexRoute component={ Pokedex } />
      <Route path='pokemon/:pokemonName' component={ Pokemon } />
      <Route path='*' component={ Pokedex } />
    </Route>
  </Router>
);

export default routes;
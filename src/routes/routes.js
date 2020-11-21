import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/home/Home';
import Categories from '../pages/Categories';
import Favorites from '../pages/Favorites';

const Routes = () => (
  <Switch>
    <Route exact path='/amovies' component={Home} />
    <Route exact path='/categories' component={Categories} />
    <Route exact path='/favorites' component={Favorites} />
  </Switch>
);

export default Routes;

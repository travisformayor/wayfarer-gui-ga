import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/modals/Login';
import Signup from '../components/modals/Signup';
import CityContainer from '../container/CityContainer';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/cities' component={CityContainer} />
  </Switch>
)
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
  </Switch>
)
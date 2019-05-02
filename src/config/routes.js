import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Modals/Login';
import Signup from '../components/Modals/Signup';
import Profile from '../components/Profile/Profile';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/profile' component={Profile} />
  </Switch>
)
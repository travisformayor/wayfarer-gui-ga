import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Modals/Login';
import Logout from '../components/Modals/Logout';
import Signup from '../components/Modals/Signup';
import Profile from '../components/Profile/Profile';
import CityContainer from '../container/CityContainer';
import Posts from '../components/Posts/Posts';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/cities' component={CityContainer} />
    <Route path='/posts' component={Posts} />
    <Route path='/profile' component={Profile} />
    <Route path='/logout' component={Logout} />
  </Switch>
)
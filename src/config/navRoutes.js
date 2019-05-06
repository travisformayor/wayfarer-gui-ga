import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../components/Modals/Login';
import Logout from '../components/Modals/Logout';
import Signup from '../components/Modals/Signup';
import Profile from '../components/Profile/Profile';
import CityContainer from '../container/CityContainer';
import Posts from '../components/Posts/Posts';
import ShowPost from '../components/ShowPost/ShowPost';
import City from '../components/City/City';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/signup' component={Signup} />
    <Route path='/posts' component={Posts} />
    <Route path='/profile' component={Profile} />
    <Route path='/logout' component={Logout} />
    <Route path='/post/:id' component={ShowPost} />
    <Route path='/:cityURL' component={CityContainer} />
  </Switch>
)
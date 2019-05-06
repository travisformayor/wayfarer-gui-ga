import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Modals/Login';
import SignUp from '../Modals/Signup';
import Logout from '../Modals/Logout';
import './Header.css';

class Header extends Component {
  state = {
    loggedIn: false,
  }

  isLoggedIn = (boolean) => {
    this.setState({
      loggedIn: boolean,
    })
  }

  render() {

    return (
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/san-francisco'}>Cities</Link>
          <Login controlStatus={this.isLoggedIn} />
          <SignUp />
          <Link to={'/profile'}>Profile</Link>
          <Logout 
            controlStatus={this.isLoggedIn} 
            loginStatus={this.state.loggedIn} />
        </nav>
      </header>
    )
  }
}

export default Header;
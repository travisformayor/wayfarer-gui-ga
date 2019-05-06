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
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo left">
            Wayfarer
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/san-francisco'}>Cities</Link></li>
            <li><Login controlStatus={this.isLoggedIn} /></li>
            <li><SignUp /></li>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li><Logout controlStatus={this.isLoggedIn} 
                  loginStatus={this.state.loggedIn} /></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;
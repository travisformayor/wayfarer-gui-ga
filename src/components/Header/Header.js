import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

class Header extends Component {
  render() {
    return (

        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo left">
              {/* <img src={logo} width="30px" height="auto" /> */}
              Wayfarer
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/san-francisco'}>Cities</Link></li>
            <li><Link to={'/login'}>Login</Link></li>
            <li><Link to={'/signup'}>Sign Up</Link></li>
            <li><Link to={'/profile'}>Profile</Link></li>
            <li><Link to={'/logout'}>Logout</Link></li>
            </ul>
          </div>
        </nav>


    )
  }
}

export default Header;
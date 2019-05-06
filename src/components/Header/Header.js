import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/san-francisco'}>Cities</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Sign Up</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/logout'}>Logout</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
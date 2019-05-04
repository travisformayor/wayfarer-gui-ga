import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/login'}>Login</Link>
          <Link to={'/signup'}>Sign Up</Link>
          <Link to={'/cities'}>Cities</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/logout'}>Logout</Link>
          <Link to={'/posts'}>Posts</Link>
        </nav>
      </header>
    )
  }
}

export default Header;
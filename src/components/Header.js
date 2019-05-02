import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/signin'}>Sign In</Link>
          <Link to={'/signup'}>Sign Up</Link>
        </nav>
        <h1>Wayfarer</h1>
      </header>
    )
  }
}

export default Header;
import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import navRoutes from './config/navRoutes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { navRoutes }
        <Footer />
      </div>
    )
  }
}

export default App;
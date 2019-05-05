import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import navRoutes from './config/navRoutes';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          {navRoutes}
        </main>
        <Footer />
      </>
    )
  }
}

export default App;
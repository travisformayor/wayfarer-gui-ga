import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyRoutes from './config/routes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { MyRoutes }
        <Footer />
      </div>
    )
  }
}

export default App;
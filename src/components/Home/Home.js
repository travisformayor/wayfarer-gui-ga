import React, { Component } from 'react';
import logo from './home-goldengate.jpg';

class Home extends Component {
  render() {
    return (
      // <h1>
      //   Wayfarer Landing Page
      // </h1>
      <div class="row">
    <div class="col s12 m12" >
      <div class="card">
        <div class="card-image">
        <img src={logo}/>
          
        </div>
        
        
      </div>
    </div>
  </div>
    );
  }
}

export default Home;
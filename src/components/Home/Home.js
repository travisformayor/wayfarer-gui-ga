import React, { Component } from 'react';
import logo from './home-goldengate.png';

class Home extends Component {
  render() {
    let height = {
      height: 400
    }
    return (
      // <h1>
      //   Wayfarer Landing Page
      // </h1>
      <div className="row">
      <div className="col s12 m12" >
        <div className="center">
        <img src={logo}/>
        <div className="row">

      <div className="col s4">
        <h5>Topic 1</h5>
        <p> Lorem ipsum dolor sit amet, eu quod quot ipsum vel, id eum singulis postulant. Eum te numquam facilisi intellegebat. Ius no ipsum eloquentiam. Oblique propriae qui te, legere periculis no his.  </p>
      </div>
      <div className="col s4">
        <h5>Topic 2</h5>
        <p>Lorem ipsum dolor sit amet, eu quod quot ipsum vel, id eum singulis postulant. Eum te numquam facilisi intellegebat. Ius no ipsum eloquentiam. Oblique propriae qui te, legere periculis no his.</p>
      </div>
      <div className="col s4">
        <h5>Topic3</h5>
        <p>Lorem ipsum dolor sit amet, eu quod quot ipsum vel, id eum singulis postulant. Eum te numquam facilisi intellegebat. Ius no ipsum eloquentiam. Oblique propriae qui te, legere periculis no his.</p>
      </div>

    </div>
        
        
        </div>
      
    </div>
  </div>
    );
  }
}

export default Home;
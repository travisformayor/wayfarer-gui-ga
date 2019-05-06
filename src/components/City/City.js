import React, { Component } from 'react';
import CreatePost from '../Modals/CreatePost';

class City extends Component {
  // Version 2
  // state = {
  //   creating: false
  // };

  // createNewPostHandler = () => {
  //   this.setState({creating: true})
  // }

  render () {
    let { cities } = this.props;
    let { currentCity } = this.props;
    let city = '';

    if (cities.length > 0) {
      city = cities.find(city => {
        return city.cityURL === currentCity;
      });
    }

      return (
        <div className="col s9">
          <h3>{city.cityName}</h3>
          <h4>{city.country}</h4>

          <button data-target="modal1" id="modal1">
            <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">+</i></a>
          </button>
        </div>
      )
  }
}

export default City;
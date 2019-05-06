import React, { Component } from 'react';
import CreatePost from '../Modals/CreatePost';

class City extends Component {
  state = {
    show: false,
  };

  showModal = () => {
    this.setState({show: true});
  }

  hideModal = () => {
    this.setState({show: false});
  }

  render () {
    let { cities } = this.props;
    let { currentCity } = this.props;
    let city = '';

    if (cities.length > 0) {
      city = cities.find(city => {
        return city.cityURL === currentCity;
      });
    }
    // console.log('found city ', city)

      return (
        <div className="col s9">
          <h3>{city.cityName}</h3>
          <h4>{city.country}</h4>

          <span className="span-button">

            <button data-target="modal1" onCLick={this.showModal}>
              <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">+</i></a>
            </button>

          </span>
        </div>
      )
  }
}

export default City;
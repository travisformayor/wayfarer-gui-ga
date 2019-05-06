import React, { Component } from 'react';

class City extends Component {

  
  render () {

    let { cities } = this.props;
    let { currentCity } = this.props;

    let city = ''
    if (cities.length > 0) {
      city = cities.find(city => {
        return city.cityURL === currentCity;
      })
    }
    // console.log('found city ', city)

      return (
      <div className="col s9">
        <h1>{city && city.cityName}</h1>
        <h1>{city && city.country}</h1>
      </div>
      )
  }
}

export default City;
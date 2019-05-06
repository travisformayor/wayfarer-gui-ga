import React, { Component } from 'react';
import CityListItem from '../CityListItem/CityListItem';

class CityList extends Component {
  render () {
    let { cities } = this.props;

    return (
      <>
        {cities.map(city => (
          <CityListItem
            key={city._id}
            cityName={city.cityName}
            cityURL={city.cityURL}
          />
        ))
        }
      </>
    )
  }
}

export default CityList;
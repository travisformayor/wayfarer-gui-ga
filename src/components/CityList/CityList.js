import React, { Component } from 'react';
import CityListItem from '../CityListItem/CityListItem';

class CityList extends Component {
  render () {
    let { cities } = this.props;

    return (
      <div className="col s3">
        {cities.map(city => (
          <CityListItem
            key={city._id}
            cityName={city.cityName}
            cityURL={city.cityURL}
            currentCity={this.props.currentCity}
          />
        ))
        }
      </div>
    )
  }
}

export default CityList;
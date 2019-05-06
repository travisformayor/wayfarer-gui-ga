import React, { Component } from 'react';
import CityListItem from '../CityListItem/CityListItem';

class CityList extends Component {
  render () {
    let { cities } = this.props;

    const cityHeight = {
      height: 150,
    }
     
    return (
      <div className="col s3">
      <div className="valign">
      <div className="center-align">
        {cities.map(city => (
          <div style={cityHeight}>
          <CityListItem
            key={city._id}
            cityName={city.cityName}
            cityURL={city.cityURL}
            currentCity={this.props.currentCity}
          />
          </div>
        ))
        }
        </div>
        </div>
      </div>
    )
  }
}

export default CityList;
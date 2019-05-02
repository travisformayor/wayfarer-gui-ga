import React, { Component } from 'react';
import CityListItem from '../CityListItem/CityListItem';
class CityList extends Component {

  render () {
    let { cities } = this.props;
    //console.log(cities);
    return (
      <div>
      { cities.map(city => (
      <CityListItem 
        key={city._id}
        city={city}
        />
       
      ))}
      </div>
    )
  }
}
export default CityList;
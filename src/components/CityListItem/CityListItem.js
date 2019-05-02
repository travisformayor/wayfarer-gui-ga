import React, { Component } from 'react';

class CityListItem extends Component {

  render () {
    let { city } = this.props;
    console.log('my city');
    console.log(city);
      return (
      <h2>{city.name}</h2>
      )
  }
}
export default CityListItem;
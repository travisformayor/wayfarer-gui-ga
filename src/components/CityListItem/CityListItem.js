import React, { Component } from 'react';

class CityListItem extends Component {

  render () {
    // let { cities } = this.props;
    console.log('this CityListItem: ', this.props);

    return (
      <h6>{this.props.cityName}</h6>
    )
  }
}

export default CityListItem;
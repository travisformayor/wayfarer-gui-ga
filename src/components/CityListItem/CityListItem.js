import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CityListItem extends Component {

  render () {
    // let { cities } = this.props;
    // console.log('this CityListItem: ', this.props);

    let active = "card blue-grey darken-1";
    if (this.props.currentCity === this.props.cityURL) {
      active = "card red";
    }

    return (
      <div className={active}>
        <div className="card-action">
          <Link to={`/${this.props.cityURL}`}><h4>{this.props.cityName}</h4></Link>
        </div>
      </div>
    )
  }
}

export default CityListItem;
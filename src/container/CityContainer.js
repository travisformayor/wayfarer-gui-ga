import React, { Component } from 'react';
import CityList from '../components/CityList/CityList';
import City from '../components/City/City';

class CityContainer extends Component {
	state = {
      cities: [],
  }

  componentDidMount () {
    // call function to get all city data city data
    this.fetchCities();
  }

  fetchCities = () => {
    const citiesList = [
      {name: 'London', _id: 1},
      {name: 'San Francisco', _id: 2},
    ]
    this.setState ({
      cities: citiesList,
    });
  }

  render(){
    return (
      <>
        <h1>{this.props.match.params.cityURL}</h1>
        {/* <CityList
          cities={this.props.match.params} /> */}
      </>
    )
  }
}

export default CityContainer;
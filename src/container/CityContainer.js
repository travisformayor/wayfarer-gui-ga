import React, { Component } from 'react';
import CityList from '../components/CityList/CityList';
import City from '../components/City/City';
import CityModel from '../models/city';

class CityContainer extends Component {
	state = {
      cities: [],
      currentCity: 'san-francisco',
  }

  componentDidMount () {
    // call function to get all city data city data
    this.fetchCities();
  }

  fetchCities = () => {
    CityModel.getCities()
    .then(res => {
      console.log("Get cities info: ", res);
      if (res.data.allCities) {
        this.setState({
          cities: res.data.allCities
        })
      }
      console.log("Get cities info fropm this.state: ", this.state);
    })
    .catch(error => {
      // this.setState({ error });
      console.log("Error: ", error);
    });
  }

  render(){
    return (
      <>
        <CityList cities = {this.state.cities} />
      </>
    )
  }
}

export default CityContainer;
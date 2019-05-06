import React, { Component } from 'react';
import CityList from '../components/CityList/CityList';
import City from '../components/City/City';
import CityModel from '../models/city';
import './cities.css';

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
    })
    .catch(error => {
      // this.setState({ error });
      console.log("Error: ", error);
    });
  }

  render(){
    console.log('cities state', this.state.cities.length)
    let { cityURL } = this.props.match.params
    return (
      <div className="row">
        <CityList cities={this.state.cities} />
        <City 
          cities={this.state.cities}
          cityURL={cityURL} />
      </div>
    )
  }
}

export default CityContainer;
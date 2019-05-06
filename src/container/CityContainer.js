import React, { Component } from 'react';
import CityList from '../components/CityList/CityList';
import City from '../components/City/City';
import CityModel from '../models/city';
import PostModel from '../models/userPost';
import './cities.css';

class CityContainer extends Component {
	state = {
    cities: [],
    currentCity: 'san-francisco',
    posts: [],
  }

  componentDidMount () {
    // call function to get all city data city data
    this.getCities();
    this.getAllPosts();
  }

  getCities = () => {
    CityModel.getCities()
    .then(res => {
      // console.log("Get cities info: ", res);
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

  getAllPosts = () => {
    PostModel.all(this.state.currentUsername)
      .catch(error => {
        this.setState({errors: [{message: 'Trouble retrieving posts. Please try again.'}]})
        console.log('Error getting posts: ', error)
      })
      .then(fetchedPosts => {
        // console.log('All posts: ', fetchedPosts);
        this.setState({
          posts: fetchedPosts.data.allPosts,
        });
      });
  };

  render(){
    // console.log('cities state', this.state.cities.length)
    let { cityURL } = this.props.match.params
    return (
      <div className="row">
        <CityList 
          cities={this.state.cities} 
          currentCity={cityURL}/>
        <City 
          cities={this.state.cities}
          currentCity={cityURL} 
          allPosts={this.state.posts} />
      </div>
    )
  }
}

export default CityContainer;
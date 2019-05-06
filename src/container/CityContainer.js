import React, { Component } from 'react';
import CityList from '../components/CityList/CityList';
import City from '../components/City/City';
import CityModel from '../models/city';
import PostModel from '../models/userPost';
import UserModel from "../models/user";
import './cities.css';

class CityContainer extends Component {
	state = {
    cities: [],
    currentCity: 'san-francisco',
    posts: [],
    currentUsername: '',
    loggedIn: false,
  }

  componentDidMount () {
    // call function to get all city data city data
    this.getCities();
    this.getAllPosts();
    this.getUser();
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

  getUser = () => {
    UserModel.getProfile()
      .catch(error => {
        this.setState({errors: [{message: 'Trouble getting user info. Are you logged in?'}]});
        console.log('Fetch profile error: ', error);
      })
      .then(res => {
        console.log("User info response: ", res);
        if (res.data.loggedIn) {
          this.setState({
            currentUsername: res.data.foundUser.username,
            loggedIn: true,
          })
        }
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
          allPosts={this.state.posts}
          loggedIn={this.state.loggedIn}
          currentUsername={this.state.currentUsername} />
      </div>
    )
  }
}

export default CityContainer;
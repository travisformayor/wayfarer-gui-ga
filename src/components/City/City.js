import React, { Component } from 'react';
import CreatePost from '../Modals/CreatePost';
import Posts from '../Posts/Posts';

class City extends Component {
  // Version 2
  // state = {
  //   creating: false
  // };

  // createNewPostHandler = () => {
  //   this.setState({creating: true})
  // }

  render () {
    let { cities, allPosts, currentCity } = this.props;

    if (cities.length > 0) {
      city = cities.find(city => {
        return city.cityURL === currentCity;
      });
    }
    // console.log('City props ', this.props)

    let cityPosts = [];
    if (allPosts.length > 0) {
      cityPosts = allPosts.filter(post => {
        return post.cityURL === currentCity
      });
    }
    // console.log('Current city posts', cityPosts);

      return (
        <div className="col s9">
          <h1>{city && city.cityName}</h1>
          <h1>{city && city.country}</h1>

          <div className="posts-holder">
            <Posts posts={cityPosts} />

          </div>

            <div className="col s9">
              <h3>{city.cityName}</h3>
              <h4>{city.country}</h4>

              <button data-target="modal1" id="modal1">
                <a className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">+</i></a>
              </button>
            </div>
        </div>
      )
  }
}

export default City;
import React, { Component } from 'react';
import Posts from '../Posts/Posts';

class City extends Component {

  
  render () {

    let { cities, allPosts, currentCity } = this.props;

    let city = ''
    if (cities.length > 0) {
      city = cities.find(city => {
        return city.cityURL === currentCity;
      })
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
      </div>
      )
  }
}

export default City;
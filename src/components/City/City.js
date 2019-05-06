import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import Seattle from '../../img/seattle.jpeg';
import SF from '../../img/san-francisco.jpg';
import Sydney from '../../img/sydney.jpg';
import London from '../../img/london.jpg';
import CreatePost from '../Modals/CreatePost';

class City extends Component {

  render () {

    const imagePadding = {
      padding: '75',
    }
    

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

    let image;
    switch (currentCity) {
      case 'san-francisco':
        image = <img src={SF} alt="San Francisco" width="650px" height="400px"/>;
        break;
      case 'seattle':
        image = <img src={Seattle} alt="Seattle" width="650px" height="400px"/>;
        break;
      case 'london':
        image = <img  src={London} alt="London" width="650px" height="400px"/>;
        break;
      case 'sydney':
        image = <img src={Sydney} alt="Sydney" width="650px" height="400px"/>;
        break;
      default:
        image = <img alt="Error Loading" width="650px" height="400px"/>;
    }

      return (
      <div className="col s9">
        <div className="city-header">
        <div className="center">
        <h3>{city && city.cityName}</h3>
        <h4>{city && city.country}</h4>
        </div>
        </div>
        <div className="city-img s4 center" style={imagePadding}>
          {image}
        </div>

        <CreatePost
          city={city.cityURL}
          loggedIn={this.props.loggedIn}
          currentUsername={this.props.currentUsername} />

        <div className="posts-holder">
          <Posts posts={cityPosts} />

        </div>
      </div>
      )
  }
}

export default City;
import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import Seattle from '../../img/seattle.jpeg';
import SF from '../../img/san-francisco.jpg';
import Sydney from '../../img/sydney.jpg';
import London from '../../img/london.jpg';
import CreatePost from '../Modals/CreatePost';

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

    let image;
    switch (currentCity) {
      case 'san-francisco':
        image = <img className="responsive-img" src={SF} alt="San Francisco" />;
        break;
      case 'seattle':
        image = <img className="responsive-img" src={Seattle} alt="Seattle" />;
        break;
      case 'london':
        image = <img className="responsive-img" src={London} alt="London" />;
        break;
      case 'sydney':
        image = <img className="responsive-img" src={Sydney} alt="Sydney" />;
        break;
      default:
        image = <img className="responsive-img"  alt="Error Loading" />;
    }

      return (
      <div className="col s9">
        <div className="city-header">
        <h1>{city && city.cityName}</h1>
        <h1>{city && city.country}</h1>
        </div>
        <div className="city-img">
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
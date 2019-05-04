import React, { Component } from 'react';
import Posts from '../Posts/Posts';

class Post extends Component {
  render() {
    console.log('post console: ', this.props);
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.title}</span>
              <p>{this.props.content}</p>
            </div>
            <div className="card-action">
              <a href="#">Go to Post</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;
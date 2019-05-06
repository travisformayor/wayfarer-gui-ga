import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Post extends Component {
  render() {
    // console.log('post console: ', this.props);
    return (
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.title}</span>
            </div>
            <div className="card-action">
            <Link to={`/post/${this.props.id}`}>Go to Post</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;
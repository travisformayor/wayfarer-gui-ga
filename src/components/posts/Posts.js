import React, { Component } from 'react';

class Posts extends Component {
  render() {
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header"><h4>Posts</h4></li>
          <li className="collection-item"><a href="#!" className="collection-item">Post</a></li>
        </ul>
      </div>
    )
  }
}

export default Posts;
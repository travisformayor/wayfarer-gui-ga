import React, { Component } from 'react';
import PostModel from '../../models/userPost';

class Posts extends Component {

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    PostModel.all()
      .then(res => {
        console.log('Posts collected: ', res);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  }

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
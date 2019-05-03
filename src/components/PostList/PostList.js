import React, { Component } from 'react';
import Posts from '../Posts/Posts';

class PostList extends Component {
  render() {
    let { posts } = this.props;

    return (
      <div>
        { posts.map(post => (
          <Posts
            key={post._id}
            post={post}
          />
        ))}
      </div>
    )
  }
}

export default PostList;
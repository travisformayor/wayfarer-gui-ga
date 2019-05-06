import React, { Component } from 'react';
import Post from '../Post/Post';

class Posts extends Component {
  render() {
    // console.log(this.props.posts);

    let {posts} = this.props;
    console.log('Posts output: ', posts);

    return (
      <>
        {posts.map(post => (
          <Post
            key={post._id}
            id={post._id}
            title={post.title}
            username={post.username}
            cityName={post.cityName}
            content={post.content}
          />
        ))}
      </>
    )
  }
}

export default Posts;
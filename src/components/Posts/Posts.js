import React, { Component } from 'react';
import Post from '../Post/Post';
import './Posts.css';

class Posts extends Component {
  render() {
    // console.log(this.props.posts);

    let {posts} = this.props;
    let reversedPosts = posts.reverse();
    console.log('Posts output: ', posts);

    return (
      <div className="posts-holder">
        {reversedPosts.map(post => (
          <Post
            key={post._id}
            id={post._id}
            title={post.title}
            username={post.username}
            cityName={post.cityName}
            content={post.content}
          />
        ))}
      </div>
    )
  }
}

export default Posts;
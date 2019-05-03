import React, { Component } from 'react';
import PostList from '../components/PostList/PostList';
import Posts from '../components/Posts/Posts';

class PostContainer extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    const postsList = [
      {
        cityName: 'London',
        title: 'A rainy city',
        content: 'London Bridge',
        _id: 1,
      },
      {
        cityName: 'SF',
        title: 'A foggy city',
        content: 'Golden Gate Bridge',
        _id: 2,
      },
    ]
    this.setState({
      posts: postsList,
    });
  }

  render() {
    return (
      <>
        <PostList
          posts={this.state.posts} />
      </>
    )
  }
}

export default PostContainer;
import React, { Component } from 'react';
import PostModel from '../../models/userPost';
import Post from '../Post/Post';

class Posts extends Component {
  state = {
    posts: [],
  }

  // componentDidMount() {
  //   this.getPosts();
  // }

  // getPosts = () => {
  //   PostModel.all()
  //     .then(res => {
  //       console.log('Posts collected: ', res);
  //     })
  //     .catch(error => {
  //       console.log('Error: ', error);
  //     });
  // }

  render() {
    // let posts = this.props.posts.map( (post) => {
    //   return (
    //     <Post
    //       key={post._id}
    //       post={post}

    //     />
    //   )
    // });

    return (
      <ul>
        {/* {posts} */}
      </ul>
    )
  }
}

export default Posts;
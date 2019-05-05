import React, { Component } from 'react';

class ShowPost extends Component {
  state = {
    posts: [],
  }

  getUserPosts = () => {
    const posts = [
      {
        username: 'dave',
        cityName: 'London',
        content: 'This is a city',
        date: Date.now(),
        title: 'London Bridge',
        _id: 1,
      },
      {
        username: 'mary',
        cityName: 'SF',
        content: 'This is a foggy city',
        date: Date.now(),
        title: 'Golden Gate Bridge',
        _id: 2,
      }
    ]
    this.setState({
      posts: posts,
    })
  };

  componentDidMount() {
    this.getUserPosts();
  }

  render() {

    const { id } = this.props.match.params;
    const post = this.state.posts.find(post => {
      return post._id == id;
    })

    console.log('Found post: ', post);
    return (
      <div className="row">
        <div className="col m16">
          <div className="card">
            <div className="card-content">
              <span className="card-title">{post && post.title}</span>
              <p>{post && post.content}</p>
              <p>{post && post.username}</p>
            </div>
            <div className="card-action">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowPost;
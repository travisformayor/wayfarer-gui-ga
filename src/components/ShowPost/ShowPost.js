import React, { Component } from 'react';
import PostModel from '../../models/userPost';

class ShowPost extends Component {
  state = {
    post: [],
    id: this.props.match.params.id,
  }

  getPost = (id) => {
    PostModel.oneById(id)
      .catch(error => {
        this.setState({errors: [{message: 'Trouble retrieving post. Please try again.'}]})
        console.log('Error getting post: ', error)
      })
      .then(fetchedPost => {
        console.log('Post response: ', fetchedPost)
        this.setState({
          post: fetchedPost.data.foundPost,
        });
      });
  };

  componentDidMount() {
    this.getPost(this.state.id);
  }

  render() {
    let { post } = this.state;
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
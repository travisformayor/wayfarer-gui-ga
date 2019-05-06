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
        let { foundPost } = fetchedPost.data;
        if (foundPost.cityURL !== undefined) {
          foundPost.cityURL = foundPost.cityURL.replace("-", " ");
        }
        this.setState({
          post: foundPost,
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
              <p style={{'textTransform': 'capitalize'}}>User: {post && post.username}</p>
              <p style={{'textTransform': 'capitalize'}}>City: {post && post.cityURL}</p>
              <p>Content: {post && post.content}</p>
              
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
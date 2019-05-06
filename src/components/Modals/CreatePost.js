import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import PostModel from '../../models/userPost';

class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: '',
      cityURL: '',
      title: '',
      content: '',
      errors: [],
    }
  }

  onInputChange = (event) => {
    this.setState({
      cityURL: event.target.value,
      title: event.target.value,
      content: event.target.value,
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const newPost = {
      cityURL: this.props.city,
      title: this.state.title,
      content: this.state.content,
      username: this.props.currentUsername,
    }
    this.createPost(newPost);
  }

  createPost = (post) => {
    PostModel.createPost(post)
      .then((res) => {
        console.log("New post: ", res);
        if (res.data.errors) {
          this.setState({
            errors: res.data.errors,
          })
        }
      })
      .catch(error => {
        this.setState({ errors: [{ message: 'Trouble accessing the DB. Please try again' }] });
        console.log('Error: ', error);
      });
  }

  render() {
    let { loggedIn, currentUsername, city } = this.props;
    let { cityURL, title, content, errors } = this.state;
    return (
      <>
        <Modal header="Create Post" trigger={<Button>Add Post</Button>}>
          {(loggedIn) ? (
            <div className="row">
              <form className="col s12" onSubmit={this.onFormSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="title" type="text" onChange={this.onInputChange} value={title} />
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="input-field col s12">
                    <input disabled id="username" type="text" value={currentUsername} />
                    <label className="active" htmlFor="username">Username</label>
                  </div>
                  <div className="input-field col s12">
                    <input disabled id="city" type="text" value={city} />
                    <label className="active" htmlFor="city">City ID</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea id="content" className="materialize-textarea" onChange={this.onInputChange} value={content}></textarea>
                    <label htmlFor="content">Textarea</label>
                  </div>
                  <div className="input-field col s12">
                    <button type="submit" id="createPost" className="btn waves-effect waves-light">Post</button>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <h2>You are not logged in</h2>
          )}
        </Modal>
      </>
    )
  }
}

export default CreatePost;
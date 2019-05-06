import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';

class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      cityURL: '',
      title: '',
      content: '',
    }
  }

  onInputChange = (event) => {
    this.setState({
      cityURL: event.target.value,
      title: event.target.value,
      content: event.target.value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    let post = this.state.post
    this.props.createPost(post)
    this.setState({
      post: '',
    })
  }

  render() {

    let { loggedIn, currentUsername, city } = this.props;
    let { cityURL, title, content } = this.state;
    return (
      <>
        <Modal header="Create Post" trigger={<Button>Add Post</Button>}>
          {(loggedIn) ? (
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="title" type="text" onChange={this.onFormSubmit} value={title} />
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
                    <textarea id="textarea1" className="materialize-textarea" onChange={this.onFormSubmit} value={content} ></textarea>
                    <label htmlFor="textarea1">Textarea</label>
                  </div>
                  <div className="">
                    <button type="submit" className="btn waves-effect waves-light">Post</button>
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
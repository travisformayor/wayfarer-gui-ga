import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';
import PostModel from '../../models/userPost';

class CreatePost extends Component {
  constructor() {
    super()
    state = {
      cityURL: '',
      title: '',
      content: '',
    }
  }

  onInputChange = (event) => {
    const { cityURL, title, content } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    const newPost = {
      cityURL: this.state.cityURL,
      title: this.state.title,
      content: this.state.content,
    }
    this.createPost(newPost);
  }

  createPost = (post) => {
    let newPost = {
      body: post,
    }

    PostModel.create(newPost)
      .then((res) => {
        let posts = this.state.posts
        let newPosts = posts.push(res.data)
        this.setState({ newPosts })
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
                    <textarea id="content" className="materialize-textarea" onChange={this.onFormSubmit} value={content} ></textarea>
                    <label htmlFor="textarea1">Textarea</label>
                  </div>
                  <div className="">
                    <button type="submit" id="addPost" className="btn waves-effect waves-light">Post</button>
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
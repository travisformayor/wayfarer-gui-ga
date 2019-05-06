import React, { Component } from 'react';

class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      cityName: '',
      title: '',
      content: '',
    }
  }

  onInputChange = (event) => {
    this.setState({
      cityName: event.target.value,
      title: event.target.value,
      content: event.target.value,
    });
  }

  // onFormSubmit = (event) => {
  //   event.preventDefault()
  //   let post = this.state.post
  //   this.props.createPost(post)
  //   this.setState({

  //   })
  // }

  render() {
    return (
      <>
        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Create a new post</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Post</a>
          </div>
        </div>
      </>
    )
  }
}

export default CreatePost;
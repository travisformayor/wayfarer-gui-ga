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
      <React.Fragment>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="title" type="text" />
                <label htmlFor="title">Title</label>
              </div>
              <div className="input-field col s12">
                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label htmlFor="textarea1">Textarea</label>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }



}

export default CreatePost;
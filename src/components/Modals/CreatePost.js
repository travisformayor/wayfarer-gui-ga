import React, { Component } from 'react';
import { Modal, Button } from 'react-materialize';

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

    let { loggedIn, currentUsername, city } = this.props;
    return (
      <><div className="valign"><div className="center-align">
        <Modal header="Create Post" trigger={<Button className="center-align">Add Post</Button>}>
          {(loggedIn) ? (
            <div className="row">
              <form className="col s12">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="title" type="text" />
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="input-field col s12">
                    <input disabled id="post-username" type="text" value={currentUsername} />
                    <label className="active" htmlFor="username">Username</label>
                  </div>
                  <div className="input-field col s12">
                    <input disabled id="city" type="text" value={city}  />
                    <label className="active" htmlFor="city">City ID</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    <label htmlFor="textarea1">Textarea</label>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <h2>You are not logged in</h2>
          )}
        </Modal>
        </div></div>
      </>
    )
  }



}

export default CreatePost;
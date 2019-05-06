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
      modalOpen: false,
    }
  }

  onInputChange = (event) => {
    this.setState({
      cityURL: event.target.value,
      title: event.target.value,
    })
  }

  onHandleChange = (event) => {
    this.setState({
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
        if (res.data.errors) {
          this.setState({
            errors: res.data.errors,
          })
        }
        
        this.props.getAllPosts();
        this.setState({modalOpen: false});
        console.log("New post: ", res);
      })
      .catch(error => {
        this.setState({ errors: [{ message: 'Trouble accessing the DB. Please try again' }] });
        console.log('Error: ', error);
      });
  }

  onClose = () => {
    console.log('closed');
    this.setState({
      title: '',
      content: '',
      modalOpen: false,
    })
  }

  onOpen = () => {
    console.log('opened');
    this.setState({
      modalOpen: true,
    })
  }
  

  render() {
    let { loggedIn, currentUsername, city } = this.props;
    let { cityURL, title, content, errors } = this.state;
    return (
      <><div className="valign"><div className="center-align">
       <Modal 
          open={this.state.modalOpen}  
          header="Create Post" 
          trigger={<Button className="center-align">Add Post</Button>}
          options={{onCloseStart: this.onClose, onOpenStart: this.onOpen}}>

          {(loggedIn) ? (
            <div className="row">
              <form className="col s12" onSubmit={this.onFormSubmit}>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="title" type="text" onChange={this.onInputChange} value={title} />
                    <label htmlFor="title">Title</label>
                  </div>
                  <div className="input-field col s12">
                    <input disabled id="post-username" type="text" value={currentUsername} />
                    <label className="active" htmlFor="username">Username</label>
                  </div>
                  <div className="input-field col s12">
                    <input disabled id="city" type="text" value={city} />
                    <label className="active" htmlFor="city">City ID</label>
                  </div>
                  <div className="input-field col s12">
                    <textarea id="content" className="materialize-textarea" onChange={this.onHandleChange} value={content}></textarea>
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
        </div></div>
      </>
    )
  }
}

export default CreatePost;
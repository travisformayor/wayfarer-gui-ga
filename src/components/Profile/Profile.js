import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Posts from '../Posts/Posts';
import Error from '../Modals/Error';
import UserModel from "../../models/user";
import PostModel from '../../models/userPost';
import './Profile.css'

class Profile extends Component {
  state = {
    currentUsername: '',
    currentEmail: '',
    currentName: '',
    posts: [],
    currentCity: '',
    signupDateDate: '',
    editMode: false,
    errors: [],
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  componentDidMount() {
    this.getUser();
  }
  
  onEditProfile = () => {
    console.log('Button Clicked');
    this.setState ({ editMode: true});
  }

  onUpdateProfile = (event) => {
    event.preventDefault();
    const updateUser = {
      email: this.state.currentEmail,
      username: this.state.currentUsername,
      name: this.state.currentName,
      currentCity: this.state.currentCity,
    }
    this.updatedUser(updateUser);
  }

  updatedUser = (updateUser) => {
    UserModel.update(updateUser)
      .catch(error => {
        this.setState({errors: [{message: 'Trouble updating info. Please try again.'}]});
        console.log('Updating user error: ', error);
      })
      .then(res => {
        console.log("Update response: ", res);
        // res.data has success set to true if it worked
        if (res.data.success) {
          // if success is true, redirect to profile
          console.log('user updated successfully')
          this.setState ({ editMode: false });
        } else if (res.data.errors) {
          // if fail (errors returned), get the errors
          this.setState({
            errors: res.data.errors,
          })
        }
      });
  }

  getUser = () => {
    UserModel.getProfile()
      .catch(error => {
        this.setState({errors: [{message: 'Trouble getting user info. Are you logged in?'}]});
        console.log('Fetch profile error: ', error);
      })
      .then(res => {
        console.log("User info response: ", res);
        if (res.data.loggedIn) {
          this.setState({
            currentUsername: res.data.foundUser.username,
            currentEmail: res.data.foundUser.email,
            currentName: res.data.foundUser.name,
            currentCity: res.data.foundUser.currentCity,
            signupDate: res.data.foundUser.signupDate,
          })
        } else {
          this.props.history.push('/'); // withRouter being used here
        }
        this.getUserPosts()
      });
  };

  getUserPosts = () => {
    PostModel.allByUsername(this.state.currentUsername)
      .catch(error => {
        this.setState({errors: [{message: 'Trouble retrieving your posts. Please try again.'}]})
        console.log('Error getting user posts: ', error)
      })
      .then(fetchedPosts => {
        this.setState({
          posts: fetchedPosts.data.foundPosts.reverse(),
        });
      });
  };

  render() {
    let { errors } = this.state;
    return (
      <>
        <h4 className="center-align">Profile Page</h4>
        {errors.map((error, index) => (
          <Error
            message={error.message}
            key={index}
          />
        ))}
        <div className="profile-holder">
          <div className="card">
            <div className="card-content center">
              <span className="card-title">User Profile</span>
              
              {this.state.editMode ? (
                <>
                  <label htmlFor="currentName">Full Name</label>
                  <input 
                    onChange={ this.onInputChange }
                    type="text" id="currentName" name="currentName"
                    value={this.state.currentName} 
                  />
                  <label htmlFor="currentUserName">User Name</label>
                  <input 
                    onChange={ this.onInputChange }
                    type="text" id="currentUsername" name="currentUsername"
                    value={this.state.currentUsername} 
                  />
                  <label htmlFor="currentEmail">Email</label>
                  <input 
                    onChange={ this.onInputChange }
                    type="text" id="currentEmail" name="currentEmail"
                    value={this.state.currentEmail} 
                  />
                  <label htmlFor="currentCity">Current City</label>
                  <input 
                    onChange={ this.onInputChange }
                    type="text" id="currentCity" name="currentCity"
                    value={this.state.currentCity} 
                  />
                  <p>Sign Up Date {this.state.signupDate}</p>
                </>
              ) : (
                <>
                  <p>Name: {this.state.currentName}</p>
                  <p>Username: {this.state.currentUsername}</p>
                  <p>Email: {this.state.currentEmail}</p>
                  <p>Current City: {this.state.currentCity}</p>
                  <p>Sign Up Date {this.state.signupDate}</p>
                </>
              )}
            

            <div className="card-action">
              {this.state.editMode ? (
                <button onClick={ this.onUpdateProfile } id='editProfile'>
                  update Profile
                </button>
              ) : (
                <button onClick={ this.onEditProfile } id='editProfile'>
                  Edit Profile
                </button>
              )}
            </div>
            </div>
            <ul className="collection with-header">
              {/* <li className="collection-header"><h4>Posts</h4></li>
              <li className="collection-item">Post</li> */}
              <Posts posts={this.state.posts}/>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Profile);
import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import Error from '../Modals/Error';
import UserModel from "../../models/user";
import PostModel from '../../models/userPost';

class Profile extends Component {
  state = {
    currentUsername: '',
    currentEmail: '',
    currentName: '',
    posts: [],
    currentCity: '',
    signupDateDate: '',
    editMode: false,
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
      .then(res => {
        console.log("Update response: ", res);
        // res.data has success set to true if it worked
        if (res.data.success) {
          // if success is true, redirect to profile
          console.log('user updated succesfully')
          this.setState ({ editMode: false });
        } else if (res.data.errors) {
          // if fail (errors returned), get the errors
          this.setState({
            errors: res.data.errors,
          })
        }
      })
      .catch(error => {
        this.setState({error});
        console.log('Error: ', error);
      });
  }

  getUser = () => {
    UserModel.getProfile()
      .then(res => {
        console.log("Get user info response: ", res);
        if (res.data.foundUser.username) {
          this.setState({
            currentUsername: res.data.foundUser.username,
            currentEmail: res.data.foundUser.email,
            currentName: res.data.foundUser.name,
            currentCity: res.data.foundUser.currentCity,
            signupDate: res.data.foundUser.signupDate,
          })
        }
        this.getUserPosts()
      })
      .catch(error => {
        // this.setState({ error });
        console.log("Error: ", error);
      });
  };

  getUserPosts = () => {
    const posts = [
      {
        username: 'dave',
        cityName: 'London',
        content: 'This is a city',
        date: Date.now(),
        title: 'London Bridge',
        _id: 1,
      },
      {
        username: 'mary',
        cityName: 'SF',
        content: 'This is a foggy city',
        date: Date.now(),
        title: 'Golden Gate Bridge',
        _id: 2,
      }
    ]
    this.setState({
      posts: posts,
    })
  };

  render() {
    return (
      <div>
        <h4>Profile Page</h4>
        <div className="row">
          <div className="col s12 m7">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
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
              </div>

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
              <ul className="collection with-header">
                {/* <li className="collection-header"><h4>Posts</h4></li>
                <li className="collection-item">Post</li> */}
                <Posts posts={this.state.posts}/>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
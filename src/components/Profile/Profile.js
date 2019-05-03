import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import UserModel from "../../models/user";

class Profile extends Component {
  state = {
    currentUsername: '',
    currentEmail: '',
    currentName: '',
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
      name: this.state.name,
      currentCity: this.state.currentCity,
    }
    
  }

  getUser = () => {
    UserModel.get()
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
      })
      .catch(error => {
        // this.setState({ error });
        console.log("Error: ", error);
      });
  };

  render() {
    return (
      <div>
        <h4>Profile Page</h4>
        <div className="row">
          <div className="col s12 m7">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">User Name</span>
                
                {this.state.editMode ? (
                  <>
                    <input 
                      onChange={ this.onInputChange }
                      type="text" id="currentName" name="currentName"
                      value={this.state.currentName} 
                    />
                    <input 
                      onChange={ this.onInputChange }
                      type="text" id="currentUserName" name="currentUserName"
                      value={this.state.currentName} 
                    />
                    <input 
                      onChange={ this.onInputChange }
                      type="text" id="currentEmail" name="currentEmail"
                      value={this.state.currentName} 
                    />
                    <input 
                      onChange={ this.onInputChange }
                      type="text" id="currentCity" name="currentCity"
                      value={this.state.currentName} 
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
                <Posts />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
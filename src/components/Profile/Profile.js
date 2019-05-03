import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import UserModel from "../../models/user";

class Profile extends Component {
  state = {
    currentUsername: '',
    currentEmail: '',
    currentName: '',
  }

  componentDidMount() {
    this.getUser();
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
                <p>Name: {this.state.currentName}</p>
                <p>Username: {this.state.currentUsername}</p>
                <p>Email: {this.state.currentEmail}</p>
                <p>Current City</p>
                <p>Join Date:</p>
              </div>
              <div className="card-action">
                <a href="#">Edit Profile</a>
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
import React, { Component } from 'react';
import Posts from '../Posts/Posts';

class Profile extends Component {
  render() {
    return (
      <div>
        <h4>Profile Page</h4>
        <div className="row">
          <div className="col s12 m7">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">User Name</span>
                <p>Name</p>
                <p>Username</p>
                <p>Email</p>
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
import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import UserModel from "../../models/user";
import PostModel from '../../models/userPost';

class Profile extends Component {
  state = {
    currentUsername: '',
    currentEmail: '',
    currentName: '',
    posts: [],
  }

  componentDidMount() {
    this.getUser();
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
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import UserModel from "../../models/user";

class Logout extends Component {

  componentDidMount() {
    this.logoutUser();
  }

  logoutUser = () => {
    UserModel.logout()
      .then(res => {
        console.log('User logged out: ', res);
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  render() {
    return (
      <h1>Logged Out!</h1>
    )
  }
}

export default withRouter(Logout);
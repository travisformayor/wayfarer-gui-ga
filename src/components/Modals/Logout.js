import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-materialize';
import UserModel from "../../models/user";

class Logout extends Component {

  onOpen = () => {
    console.log('opened');
    this.logoutUser();
  }

  logoutUser = () => {
    UserModel.logout()
      .then(res => {
        console.log('User logged out: ', res);
        // Remove Logout to the nav bar
        this.props.controlStatus(false);
        // Redirect to home
        this.props.history.push('/');
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  render() {
    let button = (this.props.loginStatus) ? (
      <a>Logout</a>
     ) : (
      <a></a>
     )
    return (
      <Modal 
        trigger={button}
        options={{onOpenStart: this.onOpen}}>
        
        <h1>Logged Out!</h1>
      </Modal>
    )
  }
}

export default withRouter(Logout);
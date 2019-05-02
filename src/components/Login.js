import React, { Component } from 'react';
import UserModel from '../models/user';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.loginUser(this.state);
  }

  loginUser = (creds) => {
    // model call
  } 

  render() {
    return(
      <section class="login">
          <h1>Login</h1>
          <form onSubmit={ this.onLoginSubmit } id="loginForm">
            <div class="form-group">
              <label for="email">Email</label>
              <input  
                  onChange={ this.onInputChange }
                  type="text" id="email" name="email"
                  value={this.state.email} />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input  
                  onChange={ this.onInputChange }
                  type="password" id="password" name="password"
                  value={this.state.password} />
            </div>
            <input type="submit" value="Login" />
          </form>
      </section>
    );
  };
};

export default Login; 
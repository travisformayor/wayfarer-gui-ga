import React, { Component } from "react";
import UserModel from "../models/user";

class Login extends Component {
  state = {
    email: "",
    password: "",
    error: null
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onLoginSubmit = event => {
    event.preventDefault();
    this.loginUser(this.state);
  };

  loginUser = creds => {
    UserModel.login(creds)
      .then(res => {
        console.log("Login response: ", res);
        // Todo: Save cookie to localstore
      })
      .catch(error => {
        this.setState({ error });
        console.log("Error: ", error);
      });
  };

  render() {
    return (
      <section class="login">
        <h1>Login</h1>
        <form onSubmit={this.onLoginSubmit} id="loginForm">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              onChange={this.onInputChange}
              type="text"
              id="email"
              name="email"
              value={this.state.email}
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              onChange={this.onInputChange}
              type="password"
              id="password"
              name="password"
              value={this.state.password}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </section>
    );
  }
}

export default Login;

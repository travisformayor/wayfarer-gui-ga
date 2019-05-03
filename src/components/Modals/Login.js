import React, { Component } from "react";
import UserModel from "../../models/user";

class Login extends Component {
  state = {
    username: "",
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
        // res.data has login status
        // if success, redirect to profile
        // if fail, append errors
      })
      .catch(error => {
        this.setState({ error });
        console.log("Error: ", error);
      });
  };

  render() {
    return (
      <section className="login">
        <h1>Login</h1>
        <form onSubmit={this.onLoginSubmit} id="loginForm">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={this.onInputChange}
              type="text"
              id="username"
              name="username"
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
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

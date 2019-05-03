import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Error from './Error';
import UserModel from "../../models/user";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: [],
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
        // res.data has login status set to true or false
        if (res.data.login) {
          // if success (login key exists and is true), redirect to profile
          this.props.history.push('/profile'); // withRouter being used here
        } else if (res.data.errors) {
          // if fail (errors returned), get the errors
          this.setState({
            errors: res.data.errors,
          })
        }
      })
      .catch(error => {
        this.setState({ error });
        console.log("Error: ", error);
      });
  };

  render() {
    let { errors } = this.state;
    return (
      <section className="login">
        <h1>Login</h1>
        {errors.map((error, index) => (
          <Error
            message={error.message}
            key={index}
          />
        ))}
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

export default withRouter(Login);

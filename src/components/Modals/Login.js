import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import Error from './Error';
import UserModel from "../../models/user";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: [],
    formEnabled: true,
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onLoginSubmit = event => {
    event.preventDefault();
    const userObj = {
      username: this.state.username,
      password: this.state.password,
    }
    this.loginUser(userObj);
  };

  loginUser = creds => {
    // Disable form while submit is happening...
    this.setState({formEnabled: false});
    UserModel.login(creds)
      .then(res => {
        // Response back. Re-enable form
        this.setState({formEnabled: true});
        console.log("Login response: ", res);
        // res.data has login set to true if it worked
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
        // Response back. Re-enable form
        this.setState({formEnabled: true});
        this.setState({errors: [{message: 'Trouble accessing the DB. Please try again'}]});
        console.log("Error: ", error);
      });
  };

  render() {
    let { errors } = this.state;

    let submit_button = this.state.formEnabled ? (
      <input type="submit" value="Login" /> 
      ) : (
      <input type="submit" value="Login" disabled /> );

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
          {submit_button}
        </form>
      </section>
    );
  }
}

export default withRouter(Login);

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Error from './Error';
import UserModel from '../../models/user';

class Signup extends Component {
  state = {
    email: '',
    name: '',
    fullName: '',
    password: '',
    password2: '',
    currentCity: '',
    errors: [],
    formEnabled: true,
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSignupSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      email: this.state.email,
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
      password2: this.state.password2,
      currentCity: this.state.currentCity,
    }
    this.signupUser(newUser);
  }

  signupUser = (creds) => {
    // Disable form while submit is happening...
    this.setState({formEnabled: false});
    UserModel.signup(creds)
      .then(res => {
        // Response back. Re-enable form
        this.setState({formEnabled: true});
        console.log("Signup response: ", res);
        // res.data has success set to true if it worked
        if (res.data.success) {
          // if success is true, redirect to profile
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
        this.setState({errors: ['Trouble accessing the DB. Please try again']});
        console.log('Error: ', error);
      });
  }

  render() {
    let { errors } = this.state;

    let submit_button = this.state.formEnabled ? (
      <input type="submit" value="Signup" /> 
      ) : (
      <input type="submit" value="Signup" disabled /> );
     
    return(
      <section className="signup">
          <h1>Signup</h1>
          {errors.map((error, index) => (
          <Error
            message={error.message}
            key={index}
          />
        ))}
          <form onSubmit={ this.onSignupSubmit } id="signupForm">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  onChange={ this.onInputChange }
                  type="text" id="email" name="email"
                  value={this.state.email} />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                  onChange={ this.onInputChange }
                  type="text" id="username" name="username"
                  value={this.state.username} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                  onChange={ this.onInputChange }
                  type="text" id="name" name="name"
                  value={this.state.name} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                  onChange={ this.onInputChange }
                  type="password" id="password" name="password"
                  value={this.state.password} />
            </div>
            <div className="form-group">
              <label htmlFor="password2">Confirm Password</label>
              <input
                  onChange={ this.onInputChange }
                  type="password" id="password2" name="password2"
                  value={this.state.password2} />
            </div>
            <div className="form-group">
              <label htmlFor="currentCity">Current City</label>
              <input
                  onChange={ this.onInputChange }
                  type="text" id="currentCity" name="currentCity"
                  value={this.state.currentCity} />
            </div>
            {submit_button}
          </form>
      </section>
    );
  };
};

export default withRouter(Signup);
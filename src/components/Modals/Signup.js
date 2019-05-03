import React, { Component } from 'react';
import UserModel from '../../models/user';

class Signup extends Component {
  state = {
    email: '',
    password: '',
    password2: '',
    error: null,
  }

  onInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  onSignupSubmit = (event) => {
    event.preventDefault();
    this.signupUser(this.state);
  }

  signupUser = (creds) => {
    // Todo: validation
    // Todo: hash password here in frontend before sending
    UserModel.signup(creds)
      .then(res => {
        console.log('Signup response: ', res);
        // Todo: log user in
      })
      .catch(error => {
        this.setState({error});
        console.log('Error: ', error);
      });
  }

  render() {
    return(
      <section className="signup">
          <h1>Signup</h1>
          <form onSubmit={ this.onSignupSubmit } id="signupForm">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                  onChange={ this.onInputChange }
                  type="text" id="email" name="email"
                  value={this.state.email} />
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
            <input type="submit" value="Signup" />
          </form>
      </section>
    );
  };
};

export default Signup;
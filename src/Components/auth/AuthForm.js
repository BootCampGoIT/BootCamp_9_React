import React, { Component } from "react";
import axios from "axios";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
    confirm: "",
    incorrect: false,
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (this.state.incorrect) this.setState({ incorrect: false });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirm, incorrect } = this.state;
    if (!incorrect) {
      axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
            AIzaSyBi2jnww03660AOGi7s1Nhzfsz-SLgJpXg`,
        { email, password, returnSecureToken: true }
      );
    } else {
      this.setState({ incorrect: true });
    }
  };
  validate = () => {
    const { password, confirm } = this.state;
    if (password !== confirm) this.setState({ incorrect: true });
  };

  render() {
    const { email, password, confirm } = this.state;
    return (
      <div>
        {this.state.incorrect && <p>No match passwords</p>}
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Email
            <input
              type='text'
              onChange={this.onHandleChange}
              name='email'
              value={email}
            />
          </label>
          <label>
            Password
            <input
              type='password'
              onChange={this.onHandleChange}
              name='password'
              value={password}
            //   className={this.state.incorrect ? "correct" : "incorrect"}
            />
          </label>
          <label>
            Confirm password
            <input
              type='text'
              onChange={this.onHandleChange}
              name='confirm'
              value={confirm}
            //   onBlur={this.validate}
            //   className={this.state.incorrect ? "correct" : "incorrect"}
            />
          </label>
          <button type='submit'>Sign up</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;

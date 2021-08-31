import React, { Component } from "react";
import { signUp } from "../../services/authAPI";
import LoaderComponent from "../loader/Loader";

const errorMessages = {
  MISSING_PASSWORD: "Осутствует пароль в поле ввода!",
  EMAIL_EXISTS: "Почта занята",
  Привет: "Привет",
};

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
    confirm: "",
    incorrect: false,
    error: "",
    isLoading: false,
    //! displayName: ""
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    if (this.state.incorrect) this.setState({ incorrect: false });
    if (this.state.error) this.setState({ error: "" });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, incorrect } = this.state;
    if (!incorrect) {
      this.setState((prev) => ({ isLoading: !prev.isLoading }));
      try {
        await signUp(email, password);
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState((prev) => ({ isLoading: !prev.isLoading }));
      }
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
        {this.state.error && <p>{errorMessages[this.state.error]}</p>}
        {this.state.isLoading && <LoaderComponent />}
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
            />
          </label>
          <label>
            Confirm password
            <input
              type='text'
              onChange={this.onHandleChange}
              name='confirm'
              value={confirm}
            />
          </label>
          <button type='submit'>Sign up</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;

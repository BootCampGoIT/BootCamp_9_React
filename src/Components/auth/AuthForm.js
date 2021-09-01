import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { signIn, signUp } from "../../services/authAPI";
import LoaderComponent from "../loader/Loader";
import { AuthFormContainer } from "./AuthFormStyled";
import sprite from "../../icons/auth/sprite.svg";

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
        await signIn(email, password);
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
      <AuthFormContainer>
        {this.state.incorrect && <p>No match passwords</p>}
        {this.state.error && <p>{errorMessages[this.state.error]}</p>}
        {this.state.isLoading && <LoaderComponent />}
        <form onSubmit={this.onHandleSubmit} className='authForm'>
          <label className='authFormLabel'>
            Email
            <input
              type='text'
              onChange={this.onHandleChange}
              name='email'
              value={email}
              className='authFormInput'
              placeholder='alexIvanov@mail.com'
            />
            <div className='authFormInputIconContainer'>
              <svg className='authFormInputIcon'>
                <use href={sprite + "#icon-drawer"} />
              </svg>
            </div>
          </label>
          <label className='authFormLabel'>
            Password
            <input
              type='password'
              onChange={this.onHandleChange}
              name='password'
              value={password}
              className='authFormInput'
              placeholder='Qwerty123'
            />
            <div className='authFormInputIconContainer'>
              <svg className='authFormInputIcon'>
                <use href={sprite + "#icon-key2"} />
              </svg>
            </div>
          </label>
          <label className='authFormLabel'>
            Confirm password
            <input
              type='text'
              onChange={this.onHandleChange}
              name='confirm'
              value={confirm}
              className='authFormInput'
              placeholder='Qwerty123'
            />
            <div className='authFormInputIconContainer'>
              <svg className='authFormInputIcon'>
                <use href={sprite + "#icon-key2"} />
              </svg>
            </div>
          </label>
          <button type='submit' className='authFormSubmitButton'>
            Sign up
          </button>
        </form>
      </AuthFormContainer>
    );
  }
}

export default withRouter(AuthForm);

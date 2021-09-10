import React, { useState } from "react";
import { AuthFormContainer } from "./AuthFormStyled";
import sprite from "../../icons/auth/sprite.svg";
import { useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  signInOperation,
  signUpOperation,
} from "../../redux/auth/authOperations";
import { authErrorSelector } from "../../redux/auth/authSelectors";
import { resetError } from "../../redux/auth/authActions";

const initialState = {
  email: "",
  password: "",
  // displayName
};

const AuthForm = () => {
  const [user, setUser] = useState(initialState);
  const error = useSelector(authErrorSelector);
  const location = useLocation();
  const dispatch = useDispatch();

  const isSignUpForm = () => location.pathname === "/signup";

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      isSignUpForm()
        ? await dispatch(signUpOperation(user))
        : await dispatch(signInOperation(user));
    } catch (error) {}
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    error && dispatch(resetError());
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <AuthFormContainer>
      {error && <p>{error}</p>}
      <form onSubmit={onHandleSubmit} className='authForm'>
        <label className='authFormLabel'>
          Email
          <input
            type='text'
            onChange={onHandleChange}
            name='email'
            value={user.email}
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
            onChange={onHandleChange}
            name='password'
            value={user.password}
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
          {isSignUpForm() ? "Sign up" : "Sign in"}
        </button>
      </form>
    </AuthFormContainer>
  );
};

export default AuthForm;

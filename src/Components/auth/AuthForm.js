import React, { useState } from "react";
import { signIn, signUp } from "../../services/authAPI";
import { AuthFormContainer } from "./AuthFormStyled";
import sprite from "../../icons/auth/sprite.svg";
import { useLocation } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  // displayName
};

const AuthForm = () => {
  const [user, setUser] = useState(initialState);
  const location = useLocation();

  const isSignUpForm = () => location.pathname === "/signup";
  
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    isSignUpForm() ? await signUp(user) : await signIn(user);
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <AuthFormContainer>
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

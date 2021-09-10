import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  resetError,
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./authActions";

export const tokensReducer = createReducer(
  {},
  {
    [signUpSuccess]: (_, action) => ({
      tokenId: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
    }),
    [signInSuccess]: (_, action) => ({
      tokenId: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
    }),
  }
);

export const userReducer = createReducer(
  {
    email: "",
    surname: "",
    firstName: "",
    groupsMember: [],
    birthday: "",
    telegram: "",
    git: "",
  },
  {
    [signUpSuccess]: (state, action) => ({
      ...state,
      email: action.payload.email,
    }),
    [signInSuccess]: (state, action) => ({
      ...state,
      email: action.payload.email,
    }),
  }
);

export const errorReducer = createReducer("", {
  [signUpError]: (_, action) => action.payload,
  [signInError]: (_, action) => action.payload,
  [resetError]: () => "",
});

export const loaderReducer = createReducer(false, {
  [signUpRequest]: () => true,
  [signUpSuccess]: () => false,
  [signUpError]: () => false,
  [signInRequest]: () => true,
  [signInSuccess]: () => false,
  [signInError]: () => false,
});

const tokensConfig = {
  key: "auth",
  storage,
};

const userConfig = {
  key: "user",
  storage,
  whitelist: ["email"],
};

export const authReducer = combineReducers({
  tokens: persistReducer(tokensConfig, tokensReducer),
  user: persistReducer(userConfig, userReducer),
  error: errorReducer,
  isLoading: loaderReducer,
});

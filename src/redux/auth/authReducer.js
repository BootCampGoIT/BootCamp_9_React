import { createReducer } from "@reduxjs/toolkit";
import { signInAction, signUpAction, signOut } from "./authActions";

export const authReducer = createReducer(
  {},
  {
    [signUpAction]: (_, action) => action.payload,
    [signInAction]: (_, action) => action.payload,
    [signOut]: () => ({}),
  }
);

import { createAction } from "@reduxjs/toolkit";

export const signUpAction = createAction("auth/signUp");
export const signInAction = createAction("auth/signIn");
export const signOut = createAction("auth/signOut")
import { registerDB, signIn, signUp } from "../../services/authAPI";
import {
  signInError,
  signInRequest,
  signInSuccess,
  signUpError,
  signUpRequest,
  signUpSuccess,
} from "./authActions";

export const signUpOperation = (user) => async (dispatch) => {
  dispatch(signUpRequest());
  try {
    const response = await signUp(user);
    registerDB(response.data.localId, response.data.email, response.data.idToken);
    console.log("response :>> ", response);
    dispatch(signUpSuccess(response.data));
  } catch (error) {
    dispatch(signUpError(error.message));
  }
};

export const signInOperation = (user) => async (dispatch) => {
  dispatch(signInRequest());
  try {
    const response = await signIn(user);
    dispatch(signInSuccess(response.data));
  } catch (error) {
    dispatch(signInError(error.message));
  }
};

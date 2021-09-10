import axios from "axios";

const signUp = async (user) => {
  try {
    return await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

const signIn = async (user) => {
  try {
    return await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export { signUp, signIn };



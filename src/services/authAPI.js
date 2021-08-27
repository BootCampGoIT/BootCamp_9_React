import axios from "axios";

const signUp = async (email, password) => {
  try {
    return await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      email,
      password,
      returnSecureToken: true,
    });
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

const signIn = async (email, password) => {
  try {
    return await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      email,
      password,
      returnSecureToken: true,
    });
  } catch (error) {
    throw new Error(error.response.data.error.message);
  }
};

export { signUp, signIn };

// const authServices = {
//     signUp,
//     signIn
// }

// export default authServices;

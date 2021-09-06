const ADD_GROUP = "-=/groups/addGroup=-";
const SET_ERROR = "/groups/setError";

const createGroup = (group) => {
  return {
    type: ADD_GROUP,
    payload: group,
  };
};

const setError = (text) => {
  return {
    type: SET_ERROR,
    payload: text,
  };
};

export { ADD_GROUP, SET_ERROR };
export { createGroup, setError };

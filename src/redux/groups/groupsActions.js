const ADD_GROUP = "@/groups/addGroup";
const SET_ERROR = "@/groups/setError";
const GET_GROUPS = "@/groups/getGroups";
const SET_LOADER = "@/groups/setLoader";

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


const getGroups = (groups) => ({
  type: GET_GROUPS,
  payload: groups,
});

const setLoader = () => ({
  type: SET_LOADER,
});

export { ADD_GROUP, SET_ERROR, GET_GROUPS, SET_LOADER };
export { createGroup, setError, getGroups, setLoader };

import { combineReducers } from "redux";
import { ADD_GROUP, GET_GROUPS, SET_ERROR, SET_LOADER } from "./groupsActions";

export const groupsItemsReducer = (state = null, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return action.payload;
    case ADD_GROUP:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const groupsErrorReducer = (state = "", action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export const groupsLoaderReducer = (state = false, action) => {
  switch (action.type) {
    case SET_LOADER:
      return !state;
    default:
      return state;
  }
};

export const groupsReducer = combineReducers({
  items: groupsItemsReducer,
  error: groupsErrorReducer,
  isLoading: groupsLoaderReducer,
});

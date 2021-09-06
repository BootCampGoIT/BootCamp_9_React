import { combineReducers } from "redux";
import { CREATE_COURSE, SET_LOADER } from "./coursesActions";

export const coursesItems = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_COURSE:
      return [...state, payload];

    default:
      return state;
  }
};

export const errorReducer = (state = "", action) => {
  return state;
};

export const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case SET_LOADER:
      return !state;

    default:
      return state;
  }
};

export const coursesReducer = combineReducers({
  items: coursesItems,
  error: errorReducer,
  isLoading: loaderReducer,
});

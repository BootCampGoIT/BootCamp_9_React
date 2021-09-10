import { combineReducers } from "redux";
import {
  CREATE_COURSE,
  GET_COURSES,
  RESET_ERROR,
  SET_ERROR,
  SET_FILTER,
  SET_LOADER,
} from "./coursesActions";

export const coursesItems = (state = [], { type, payload }) => {
  switch (type) {
    case CREATE_COURSE:
      return [...state, payload];
    case GET_COURSES:
      return payload;

    default:
      return state;
  }
};

export const errorReducer = (state = "", action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    case RESET_ERROR:
      return "";
    default:
      return state;
  }
};

export const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case SET_LOADER:
      return !state;

    default:
      return state;
  }
};

export const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return payload;

    default:
      return state;
  }
};

export const coursesReducer = combineReducers({
  items: coursesItems,
  error: errorReducer,
  isLoading: loaderReducer,
  filter: filterReducer,
});

import { combineReducers } from "redux";
import { ADD_GROUP, SET_ERROR } from "./groupsActions";

export const groupsItemsReducer = (state = [], action) => {
  switch (action.type) {
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

export const groupsReducer = combineReducers({
  items: groupsItemsReducer,
  error: groupsErrorReducer,
});


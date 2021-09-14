import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { signOut } from "../auth/authActions";
import {
  createGroup,
  getGroups,
  resetError,
  setError,
  setFilter,
  setLoader,
} from "./groupsActions";

export const groupsItemsReducer = createReducer([], {
  [getGroups]: (_, { payload }) => payload,
  [createGroup]: (state, { payload }) => [...state, payload],
  [signOut]: () => null,
});

export const groupsErrorReducer = createReducer("", {
  [setError]: (_, { payload }) => payload,
  [resetError]: (state, { payload }) => [...state, payload],
  [signOut]: "",
});

export const groupsLoaderReducer = createReducer(false, {
  [setLoader]: (state) => !state,
  [signOut]: false,
});
export const groupsFilterReducer = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
  [signOut]: "",
});

export const groupsReducer = combineReducers({
  items: groupsItemsReducer,
  error: groupsErrorReducer,
  isLoading: groupsLoaderReducer,
  filter: groupsFilterReducer,
});

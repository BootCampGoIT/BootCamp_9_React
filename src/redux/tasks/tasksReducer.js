import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { signOut } from "../auth/authActions";
import {
  addTaskActionCreator,
  // addValue,
  deleteTaskActionCreator,
  setFilter,
} from "./tasksActions";

const tasksItemsReducer = createReducer([], {
  [addTaskActionCreator]: (state, action) => [...state, action.payload],
  [deleteTaskActionCreator]: (state, action) =>
    state.filter((task) => task.id !== action.payload),
  [signOut]: () => [],
});

const tasksFilterReducer = createReducer("", {
  [setFilter]: (_, action) => action.payload,
  [signOut]: () => "",
});

// export const valueReducer = createReducer(0, {
//   [addValue]: (state) => state + 1,
// });

export const tasksReducer = combineReducers({
  items: tasksItemsReducer,
  filter: tasksFilterReducer,
  // value: valueReducer,
});

// ========= redux basic ====================
// import { combineReducers } from "redux";

// export const addTaskActionCreator = (payload) => ({
//   type: "tasks/addTask",
//   payload,
// });

// export const deleteTaskActionCreator = (id) => ({
//   type: "tasks/deleteTask",
//   payload: id,
// });

// export const setFilter = (value) => ({
//   type: "setFilter",
//   payload: value,
// });

// const tasksItemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return [...state, action.payload];
//     case "tasks/deleteTask":
//       return state.filter((task) => task.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const tasksFilterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "setFilter":
//       return action.payload;

//     default:
//       return state;
//   }
// };

// export const tasksReducer = combineReducers({
//   items: tasksItemsReducer,
//   filter: tasksFilterReducer,
// });

// ============== redux slice ===================

// import { createSlice } from "@reduxjs/toolkit";

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState: { items: [], filter: "" },
//   reducers: {
//     addTaskActionCreator: (state, action) => ({
//       ...state,
//       items: [...state.items, action.payload],
//     }),
//     deleteTaskActionCreator: (state, action) => ({
//       ...state,
//       items: state.items.filter((task) => task.id !== action.payload),
//     }),
//     setFilter: (state, action) => ({ ...state, filter: action.payload }),
//   },
// });
// export const { addTaskActionCreator, deleteTaskActionCreator, setFilter } =
//   taskSlice.actions;

// export default taskSlice.reducer;

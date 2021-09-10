// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { authReducer } from "./auth/authReducer";
// import { coursesReducer } from "./courses/coursesReducer";
// import { groupsReducer } from "./groups/groupsReducer";
// import { tasksReducer } from "./tasks/tasksReducer";

// const rootReducer = combineReducers({
//   groups: groupsReducer,
//   courses: coursesReducer,
//   tasks: tasksReducer,
//   auth: authReducer
// });

// const store = configureStore({
//   reducer: rootReducer,
//   // devTools: process.env.NODE_ENV !== "production",
// });

// export default store;

// ============ redux basic ====================
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { coursesReducer } from "./courses/coursesReducer";
import { groupsReducer } from "./groups/groupsReducer";
import { tasksReducer } from "./tasks/tasksReducer";
import { authReducer } from "./auth/authReducer";
import { persistStore } from 'redux-persist'
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  groups: groupsReducer,
  courses: coursesReducer,
  tasks: tasksReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;

// const operation = (args) => async (dispatch) => {
//   dispatch(setLoader());
//   try {
//     const res = await axios.post("", args);
//     dispatch(setData(res));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoader());
//   }
// };

// const customMiddleware = (store) => (next) => async (action) => {
//   // console.log(store.getState());
//   // console.log("action :>> ", action);

//   if (action.constructor.name === "Function") {
//     await action(action.payload)(store.dispatch, store.getState);
//   } else next(action)
// };

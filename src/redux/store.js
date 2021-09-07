import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authReducer";
import { coursesReducer } from "./courses/coursesReducer";
import { groupsReducer } from "./groups/groupsReducer";
import { tasksReducer } from "./tasks/tasksReducer";

const rootReducer = combineReducers({
  groups: groupsReducer,
  courses: coursesReducer,
  tasks: tasksReducer,
  auth: authReducer
});

const store = configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;

// ============ redux basic ====================
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { coursesReducer } from "./courses/coursesReducer";
// import { groupsReducer } from "./groups/groupsReducer";
// import { tasksReducer } from "./tasks/tasksReducer";

// const rootReducer = combineReducers({
//   groups: groupsReducer,
//   courses: coursesReducer,
//   tasks: tasksReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// export default store;

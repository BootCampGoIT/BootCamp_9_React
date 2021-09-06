import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { coursesReducer } from "./courses/coursesReducer";
import { groupsReducer } from "./groups/groupsReducer";

// const state = {
//   courses: { items: [], error: "" },
//   groups: [],
// };

// const store = createStore(() => globalState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootReducer = combineReducers({
  groups: groupsReducer,
  courses: coursesReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const state = {
//   courses: {
//     items: [],
//     error: "",
//   },
//   groups: {
//     items: [],
//     error: "",
//   },
// };

import { createStore } from "redux";
import allReducer from "./reducers";

const initialStates = {
  auth: {
    loggedIn: false,
    user: {},
    token: null,
  },
  navBarItems: {
    categories: [
      { id: 1, name: "health" },
      { id: 2, name: "electronics" },
      { id: 3, name: "books" },
      { id: 4, name: "fashion" },
    ],
  },
};

let store = createStore(
  allReducer,
  initialStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

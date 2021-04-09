import { createStore } from "redux";
import allReducer from "./reducers";

const initialStates = {
  auth: {
    loggedIn: false,
    user: {},
    token: null,
  },
};

let store = createStore(
  allReducer,
  initialStates,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

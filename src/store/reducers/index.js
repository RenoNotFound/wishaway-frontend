import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  auth: authReducer,
  navBarItems: categoryReducer,
});

export default allReducers;

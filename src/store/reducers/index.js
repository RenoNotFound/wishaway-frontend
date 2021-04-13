import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  auth: authReducer,
  categories: categoryReducer,
});

export default allReducers;

import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
});

export default rootReducer;

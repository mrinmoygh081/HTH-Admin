import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import bookingReducer from "./bookingReducer";
import carsReducer from "./carsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  bookingReducer,
  carsReducer,
});

export default rootReducer;

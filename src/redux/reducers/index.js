import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import bookingReducer from "./bookingReducer";
import bookingSingleReducer from "./bookingSingleReducer";
import carsReducer from "./carsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  bookingReducer,
  carsReducer,
  bookingSingleReducer,
});

export default rootReducer;

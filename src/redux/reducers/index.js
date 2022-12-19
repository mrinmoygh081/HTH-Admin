import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";
import bookingReducer from "./bookingReducer";
import bookingSingleReducer from "./bookingSingleReducer";
import carsReducer from "./carsReducer";
import availableCarsReducer from "./availableCarsReducer";
import getPlacePriceReducer from "./getPlacePriceReducer";
import agentsReducer from "./agentsReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  authReducer,
  loadingReducer,
  bookingReducer,
  carsReducer,
  bookingSingleReducer,
  availableCarsReducer,
  getPlacePriceReducer,
  agentsReducer,
});

export default rootReducer;

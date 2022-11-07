//redux
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import rootReducer from "./reducers";

const persistConfig = {
  key: "auth",
  storage,
};
const PersistReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(PersistReducer, applyMiddleware());

const Persistor = persistStore(store);

store.subscribe(() => {
  console.log(store.getState());
});

export { Persistor };
export default store;

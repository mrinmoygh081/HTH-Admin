import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/style.css";

//redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { Persistor } from "./redux/store";
import LoadingView from "./components/LoadingView";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={Persistor}>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
);

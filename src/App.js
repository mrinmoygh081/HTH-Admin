// import Login from "./pages/Login";

import Layout from "./components/layout/Layout";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Layout />
      <ToastContainer />
    </>
  );
}

export default App;

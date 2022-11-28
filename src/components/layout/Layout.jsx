import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import TopNav from "../topbar/TopNav";
import Sidebar from "../sidebar/Sidebar";

import "./layout.css";

// pages
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import Profile from "../../pages/Profile";
import Settings from "../../pages/Settings";
import Drivers from "../../pages/Drivers";
import Agents from "../../pages/Agents";
import Bookings from "../../pages/Bookings";
import Cars from "../../pages/Cars";
import AddCars from "../../pages/AddCars";
import BookingsDetails from "../../pages/BookingsDetails";
import CarsDetails from "../../pages/CarsDetails";
import BookingsDriverAssign from "../../pages/BookingsDriverAssign";
import Owners from "../../pages/Owners";
import AddAgents from "../../pages/AddAgents";
import PaymentCycle from "../../pages/PaymentCycle";
// import LoadingView from "../LoadingView";

const Layout = () => {
  const { loginToken } = useSelector((state) => state.authReducer);
  // const loadingReducer = useSelector((state) => state.loadingReducer);

  // if (loadingReducer) {
  //   return <LoadingView />;
  // }

  return (
    <BrowserRouter>
      {!loginToken ? (
        <Login />
      ) : (
        <div className="layout">
          <Sidebar />
          <div className="layout__content">
            <TopNav />
            <div className="layout__content-main">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
                <Route path="drivers" element={<Drivers />} />
                <Route path="agents" element={<Agents />} />
                <Route path="add-agent" element={<AddAgents />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="bookingsDetails" element={<BookingsDetails />} />
                <Route
                  path="driver-assign"
                  element={<BookingsDriverAssign />}
                />
                <Route path="cars" element={<Cars />} />
                <Route path="carsDetails" element={<CarsDetails />} />
                <Route path="add-cars" element={<AddCars />} />
                <Route path="owners" element={<Owners />} />
                <Route path="payments" element={<PaymentCycle />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default Layout;

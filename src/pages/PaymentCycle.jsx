import React from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import Table from "../components/table/Table";
import LoadingView from "../components/LoadingView";
// import { BASE_URL } from "../config";

// import CreatableSelect from "react-select/creatable";
// import makeAnimated from "react-select/animated";

const tableHead = [
  "Agent ID",
  "Name",
  "Phone",
  "Address",
  "Bank Account",
  "IFSC Code",
  "Payment Amount",
  "Payment Due",
  "Previous Bookings",
  "Date",
  "Actions",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>
      <Link to={`/carsDetails`} state={item} className="under_hover">
        123456789
      </Link>
    </td>
    <td></td>
    <td>8240491818</td>
    <td>Available</td>
    <td>Manipur, Asham </td>
    <td className="actionTable">
      <button title="Assign the Car">
        <i className="bx bx-check-square"></i>
      </button>
    </td>
  </tr>
);

const tableHeadForDriver = [
  "Car Registration No",
  "Previous All Bookings",
  "Payment Amount",
  "Due Amount",
  "Payment Date",
  "Actions",
];

const PaymentCycle = () => {
  return (
    <>
      <section>
        <h2 className="page-header">Payment Cycle For Tour Agent</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <div className="topnav">
                  <div className="topnav__search">
                    <input type="text" placeholder="Search here..." />
                    <i className="bx bx-search"></i>
                  </div>
                  <div className="topnav__action">
                    <Link to="/add-cars" className="submit-button">
                      ADD NEW OWNER
                    </Link>
                  </div>
                </div>
                {!true ? (
                  <LoadingView />
                ) : (
                  <Table
                    limit="10"
                    headData={tableHead}
                    renderHead={(item, index) => renderHead(item, index)}
                    bodyData={""}
                    renderBody={(item, index) => renderBody(item, index)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="page-header">Payment Cycle For Car/Driver</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <div className="topnav">
                  <div className="topnav__search">
                    <input type="text" placeholder="Search here..." />
                    <i className="bx bx-search"></i>
                  </div>
                  <div className="topnav__action">
                    <Link to="/add-cars" className="submit-button">
                      ADD NEW OWNER
                    </Link>
                  </div>
                </div>
                {!true ? (
                  <LoadingView />
                ) : (
                  <Table
                    limit="10"
                    headData={tableHeadForDriver}
                    renderHead={(item, index) => renderHead(item, index)}
                    bodyData={""}
                    renderBody={(item, index) => renderBody(item, index)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentCycle;

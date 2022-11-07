import React from "react";

import Table from "../components/table/Table";

import bookingData from "../assets/JsonData/bookingData.json";

const tableHead = [
  "",
  "PNR NO",
  "Booking Date",
  "Travel Details",
  "total Payment",
  "Due payment",
  "Traveller",
  "Actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
);
const Bookings = () => {
  return (
    <div>
      <h2 className="page-header">Bookings</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div className="topnav">
                <div className="topnav__search">
                  <input type="text" placeholder="Search here..." />
                  <i className="bx bx-search"></i>
                </div>
              </div>
              <Table
                limit="10"
                headData={tableHead}
                renderHead={(item, index) => renderHead(item, index)}
                bodyData={bookingData}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;

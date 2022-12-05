import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Table from "../components/table/Table";
import LoadingView from "../components/LoadingView";
// import { BASE_URL } from "../config";

// import CreatableSelect from "react-select/creatable";
// import makeAnimated from "react-select/animated";

const tableHead = [
  "Registration No",
  "Car Model",
  "Driver Phone",
  "Availability",
  "Permit",
  "Assign",
];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>
      <Link to={`/carsDetails`} state={item} className="under_hover">
        123456789
      </Link>
    </td>
    <td>{item.carName}</td>
    <td>8240491818</td>
    <td>Available</td>
    <td>Manipur, Asham </td>
    <td className="actionTable">
      <button title="Assign the Car">
        {/* <i className="bx bx-check-square"></i> */}
        <i> Assign</i>
      </button>
    </td>
  </tr>
);

const BookingsDriverAssign = () => {
  // const [driver, setDriver] = useState(null);
  const carsData = useSelector((state) => state.carsReducer);
  // const availableCars = carsData.filter(
  //   (item) => item.availability.status === 0
  // );
  return (
    <section>
      <h2 className="page-header">
        Assign New Driver for <span>(Reg No)</span>
      </h2>
      <div className="row">
        {/* <div className="col-md-6 col-12">
          <div className="card">
            <div className="card__header">
              <h3>Owner Info</h3>
            </div>
            <div className="card__body">
              <table>
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Mobile</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> */}
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div className="topnav">
                <div></div>
                <div className="topnav__search">
                  <input type="text" placeholder="Search here..." />
                  <i className="bx bx-search"></i>
                </div>
              </div>
              {!true ? (
                <LoadingView />
              ) : (
                <Table
                  limit="10"
                  headData={tableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={carsData}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingsDriverAssign;

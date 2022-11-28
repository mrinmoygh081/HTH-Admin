import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Table from "../components/table/Table";
import LoadingView from "../components/LoadingView";
import { BASE_URL } from "../config";

import { loadcarsDataFun } from "../redux/actions";

const tableHead = [
  "Car Number",
  "Car Name",
  "Car Model",
  "Permit",
  "Availability",
  "Driver Name",
  "Actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    {console.log(item)}
    <td>
      <Link to={`/carsDetails`} state={item} className="under_hover">
        {item.registration[0].CarNumber}
      </Link>
    </td>
    <td>{item.carName}</td>
    <td>{item.carModel}</td>
    <td>{item.permit.map((it) => `${it}, `)}</td>
    <td>{item.availability ? "Not available" : "Available"}</td>
    <td>
      {item.driver.driverName} {item.driver.driverMobile}
    </td>
    <td className="actionTable">
      <button>
        <i className="bx bx-edit-alt"></i>
      </button>{" "}
      |{" "}
      <button>
        <i className="bx bx-trash"></i>
      </button>
    </td>
  </tr>
);
const Cars = () => {
  const dispatch = useDispatch();
  const { loginToken } = useSelector((state) => state.authReducer);
  const carsData = useSelector((state) => state.carsReducer);

  useEffect(() => {
    (() => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${loginToken}`);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`${BASE_URL}/admin/get-all-car`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          dispatch(loadcarsDataFun(result.message));
        })
        .catch((error) => console.log("error", error));
    })();
  }, [loginToken, dispatch]);

  return (
    <div>
      <h2 className="page-header">Cars</h2>
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
                    ADD NEW CAR
                  </Link>
                </div>
              </div>
              {!carsData ? (
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
    </div>
  );
};

export default Cars;

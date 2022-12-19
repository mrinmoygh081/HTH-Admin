import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

import Table from "../components/table/Table";
import LoadingView from "../components/LoadingView";
import { loadcarsDataFun } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../config";
// import { BASE_URL } from "../config";

// import CreatableSelect from "react-select/creatable";
// import makeAnimated from "react-select/animated";

const tableHead = ["Name", "Mobile", "Address"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    {console.log(item)}
    <td>{item?.driver?.driverName}</td>
    <td>{item?.driver?.driverMobile}</td>
    <td>{item?.driver?.driverAddress}</td>
  </tr>
);

const Drivers = () => {
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
    <section>
      <h2 className="page-header">Drivers</h2>
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
                    ADD NEW DRIVER
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
    </section>
  );
};

export default Drivers;

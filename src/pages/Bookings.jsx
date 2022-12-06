import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import CreatableSelect from "react-select/creatable";
// import makeAnimated from "react-select/animated";

import Table from "../components/table/Table";
import { BASE_URL } from "../config";

import LoadingView from "../components/LoadingView";
import { loadBookingDataFun } from "../redux/actions";
import Search from "../components/search/Search";

// const filterOptions = [
//   { value: "All Bookings", label: "All Bookings" },
//   { value: "New Bookings", label: "New Bookings" },
//   { value: "Current Bookings", label: "Current Bookings" },
//   { value: "Previous Bookings", label: "Previous Bookings" },
// ];

const tableHead = [
  "PNR NO",
  "Booking Date",
  "Pickup Location",
  "total Payment",
  "Due payment",
  "Traveller",
  "Assigned Driver",
  "Actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>
      <Link to={`/bookingsDetails`} state={item.id} className="under_hover">
        {item.pnrno}
      </Link>
    </td>
    <td>
      {new Date(item.bookingDate).getDate()}/
      {new Date(item.bookingDate).getMonth()}/
      {new Date(item.bookingDate).getFullYear()}
    </td>
    <td>{item.travelInfo[0].start}</td>
    <td>&#8377; {item.price}</td>
    <td>&#8377; {item.dueAmount}</td>
    <td>
      {item.travelerInfo.travelerName} {item.travelerInfo.travelerMobile}
    </td>
    <td>
      {item.driver === undefined
        ? "Not Assigned"
        : `${item.driver?.driverName} (${item.driver?.driverMobile})`}
    </td>
    <td className="actionTable" style={{ display: "flex" }}>
      <Link
        to={`/driver-assign/${item.pnrno}`}
        state={item}
        title="Assign Driver"
      >
        <i className="bx bx-user-plus"></i>
      </Link>{" "}
      |{" "}
      <Link
        to={`/edit-booking/${item.pnrno}`}
        state={item}
        title="Edit Booking"
      >
        <i className="bx bx-edit-alt"></i>
      </Link>
      {/* <button title="Delete">
        <i className="bx bx-trash"></i>
      </button> */}
    </td>
  </tr>
);
const Bookings = () => {
  // const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const { loginToken } = useSelector((state) => state.authReducer);
  const bookingsData = useSelector((state) => state.bookingReducer);
  const [searchedVal, setSearchedVal] = useState("");
  const [searchedData, setSearchedData] = useState(bookingsData);

  useEffect(() => {
    if (bookingsData) {
      let searched = bookingsData.filter((row) => {
        return row.pnrno
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase());
      });
      setSearchedData(searched);
    }
  }, [searchedVal, bookingsData]);
  // console.log(searchedData);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${loginToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${BASE_URL}/admin/booking`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(loadBookingDataFun(result.message));
      })
      .catch((error) => console.log("error", error));
  }, [loginToken, dispatch]);

  return (
    <div>
      <h2 className="page-header">Bookings</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <div className="topnav">
                {/* <div>
                  <CreatableSelect
                    options={filterOptions}
                    defaultValue={{
                      value: "All Bookings",
                      label: "All Bookings",
                    }}
                    components={animatedComponents}
                    name="state_permit"
                    isSearchable={false}
                    isClearable={false}
                    isDisabled={false}
                    isLoading={false}
                    onChange={(res) => {
                      let arr = [];
                      res.map((val) => {
                        arr.push(val.value);
                        return arr;
                      });
                    }}
                  />
                </div> */}
                <Search
                  searchedVal={searchedVal}
                  setSearchedVal={setSearchedVal}
                />
                <div className="topnav__action">
                  <Link to="/add-booking" className="submit-button">
                    ADD NEW BOOKING
                  </Link>
                </div>
              </div>
              {!searchedData ? (
                <LoadingView />
              ) : (
                <Table
                  limit="10"
                  headData={tableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={searchedData}
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

export default Bookings;

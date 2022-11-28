import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";

import Table from "../components/table/Table";
import { BASE_URL } from "../config";

import LoadingView from "../components/LoadingView";
import { loadBookingDataFun } from "../redux/actions";

const filterOptions = [
  { value: "All Bookings", label: "All Bookings" },
  { value: "New Bookings", label: "New Bookings" },
  { value: "Current Bookings", label: "Current Bookings" },
  { value: "Previous Bookings", label: "Previous Bookings" },
];

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
      <Link to={`/bookingsDetails`} state={item} className="under_hover">
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
    <td>Someone</td>
    <td className="actionTable">
      <Link to="/driver-assign" title="Assign or Reassign Car">
        <i className="bx bx-user-plus"></i>
      </Link>{" "}
      |{" "}
      <button title="Delete">
        <i className="bx bx-trash"></i>
      </button>
    </td>
  </tr>
);
const Bookings = () => {
  const animatedComponents = makeAnimated();
  const dispatch = useDispatch();
  const { loginToken } = useSelector((state) => state.authReducer);
  const bookingsData = useSelector((state) => state.bookingReducer);
  const [searchedVal, setSearchedVal] = useState("");
  const [searchedData, setSearchedData] = useState(bookingsData);

  // const [bookingsData, setBookingsData] = useState(null);

  // useEffect(() => {
  //   console.log(bookingsData);
  // }, [bookingsData]);

  useEffect(() => {
    let searched = bookingsData.filter((row) => {
      console.log(
        searchedVal.toString().toLowerCase(),
        row.pnrno.toString().toLowerCase(),
        row.pnrno
          .toString()
          .toLowerCase()
          .includes(searchedVal.toString().toLowerCase())
      );
      return row.pnrno
        .toString()
        .toLowerCase()
        .includes(searchedVal.toString().toLowerCase());
    });
    setSearchedData(searched);
  }, [searchedVal, bookingsData]);
  console.log(searchedData);

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
        // setBookingsData(result.message);
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
                <div>
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
                </div>
                <div className="topnav__search">
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchedVal}
                    onChange={(e) => setSearchedVal(e.target.value)}
                  />
                  <i className="bx bx-search"></i>
                </div>
              </div>
              {!bookingsData ? (
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

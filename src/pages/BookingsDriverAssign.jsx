import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Table from "../components/table/Table";
import LoadingView from "../components/LoadingView";
import { getAPI, postAPI } from "../apis";
import {
  availableCarsToAssign,
  loadingEnd,
  loadingStart,
} from "../redux/actions";
import { BASE_URL } from "../config";
import { useLocation, useParams } from "react-router-dom";

const tableHead = ["Car Number", "Car Model", "Driver", "Permit", "Assign"];
const renderHead = (item, index) => <th key={index}>{item}</th>;

const RenderBody = (item, index) => {
  const { loginToken } = useSelector((state) => state.authReducer);
  const { pnr } = useParams();
  const { state } = useLocation();

  console.log(state);
  const driverAssignBtn = async (carId) => {
    let requestOptions = JSON.stringify({
      pnrno: pnr,
      totalPrice: "25000",
      amount: "5000",
      carId: carId,
      date: "2022-11-12T16:30:11.643Z",
      paymentMood: "cash",
    });

    const url = `${BASE_URL}/admin/assignDriver`;

    let res = await postAPI(requestOptions, url, loginToken);
    console.log(res);
    if (res.status === 1) {
      alert("Booking done");
    } else {
      alert(res.message);
    }
  };

  return (
    <tr key={index}>
      <td>{item.registration[0].CarNumber}</td>
      <td>
        {item.carName}({item.carModel})
      </td>
      <td>
        {item.driver.driverName}({item.driver.driverMobile})
      </td>
      <td>
        {item.permit.map((item, ind) => {
          return (
            <Fragment key={ind}>
              <span>{item}, </span>
            </Fragment>
          );
        })}
      </td>
      <td className="actionTable">
        <button onClick={() => driverAssignBtn(item.id)} title="Assign the Car">
          <i>Assign</i>
        </button>
      </td>
    </tr>
  );
};

const BookingsDriverAssign = () => {
  const dispatch = useDispatch();
  const { pnr } = useParams();
  const { loginToken } = useSelector((state) => state.authReducer);
  const availableCars = useSelector(
    (state) => state.availableCarsReducer?.message
  );

  useEffect(() => {
    (async () => {
      dispatch(loadingStart());
      let url = `${BASE_URL}/admin/carList/`;
      const data = await getAPI(url, loginToken);
      dispatch(availableCarsToAssign(data));
      dispatch(loadingEnd());
    })();
  }, [loginToken, dispatch]);

  return (
    <>
      <section>
        <h2 className="page-header">
          Assign New Driver for <span>{pnr}</span>
        </h2>
        <div className="row">
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
                {!availableCars ? (
                  <LoadingView />
                ) : (
                  <Table
                    limit="10"
                    headData={tableHead}
                    renderHead={(item, index) => renderHead(item, index)}
                    bodyData={availableCars}
                    renderBody={(item, index) => RenderBody(item, index)}
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

export default BookingsDriverAssign;

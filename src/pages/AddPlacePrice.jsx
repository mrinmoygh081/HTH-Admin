import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAPI } from "../apis";

import LoadingView from "../components/LoadingView";
import Table from "../components/table/Table";
import { BASE_URL } from "../config";
import { getPlacePrice, loadingEnd, loadingStart } from "../redux/actions";

const tableHead = [
  "carModel",
  "Place",
  "Price",
  "PerKm Price",
  "date",
  "Actions",
];

const renderHead = (item, index) => <th key={index}>{item}</th>;

const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.carModel}</td>
    <td>{item.place}</td>
    <td>&#8377; {item.price}</td>
    <td>&#8377; {item.perKmPrice}</td>
    <td>
      {new Date(item.createdAt).getDate()}/{new Date(item.createdAt).getMonth()}
      /{new Date(item.createdAt).getFullYear()}
    </td>
    <td className="actionTable">
      <Link
        to={`/driver-assign/${item.pnrno}`}
        state={item}
        title="Assign or Reassign Car"
      >
        <i className="bx bx-edit-alt"></i>
      </Link>{" "}
      {/* <button title="Delete">
        <i className="bx bx-trash"></i>
      </button> */}
    </td>
  </tr>
);

const AddPlacePrice = () => {
  const dispatch = useDispatch();
  const { loginToken } = useSelector((state) => state.authReducer);
  const getPlacePriceData = useSelector((state) => state.getPlacePriceReducer);
  console.log("fd", getPlacePriceData);
  useEffect(() => {
    (async () => {
      dispatch(loadingStart());
      let url = `${BASE_URL}/admin/get-place-price/`;
      const data = await getAPI(url, loginToken);
      dispatch(getPlacePrice(data.message.data));
      dispatch(loadingEnd());
    })();
  }, [loginToken, dispatch]);

  return (
    <>
      <div>
        <h2 className="page-header">Set Place-Price With Car Model</h2>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <div className="topnav">
                  <div className="topnav__search"></div>
                  <div className="topnav__action">
                    <Link to="/add-place-price-form" className="submit-button">
                      ADD NEW PLACE-PRICE
                    </Link>
                  </div>
                </div>
                {!getPlacePriceData ? (
                  <LoadingView />
                ) : (
                  <Table
                    limit="10"
                    headData={tableHead}
                    renderHead={(item, index) => renderHead(item, index)}
                    bodyData={getPlacePriceData}
                    renderBody={(item, index) => renderBody(item, index)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPlacePrice;

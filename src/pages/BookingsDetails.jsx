import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loadingEnd,
  loadingStart,
  loadSingleBookingDataFun,
} from "../redux/actions";
import { getAPI } from "../apis";
import LoadingView from "../components/LoadingView";
import { BASE_URL } from "../config";

const BookingsDetails = () => {
  const dispatch = useDispatch();
  const { loginToken } = useSelector((state) => state.authReducer);
  const loading = useSelector((state) => state.loadingReducer);
  const singleBooking = useSelector(
    (state) => state.bookingSingleReducer?.message
  );
  const book = singleBooking?.bookingDetails;
  const driverPay = singleBooking?.driverPayment;

  //   const params = useParams(); // for paramater pass like /bookings/:id
  const { state } = useLocation(); // get passing data from Link

  useEffect(() => {
    (async () => {
      dispatch(loadingStart());
      let url = `${BASE_URL}/admin/booking/${state}`;
      const data = await getAPI(url, loginToken);
      dispatch(loadSingleBookingDataFun(data));
      dispatch(loadingEnd());
    })();
  }, [state, loginToken, dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingView />
      ) : (
        <>
          {singleBooking ? (
            <>
              <h2 className="page-header">{book.pnrno}</h2>
              <div className="row">
                {/* Booking Details */}
                <div className="col-md-7 col-12">
                  <div className="card">
                    <div className="card__header">
                      <h3>Booking Details</h3>
                    </div>
                    <div className="card__body">
                      <table>
                        <tbody>
                          <tr>
                            <td>Booking Date</td>
                            <td>
                              {new Date(book.bookingDate).getDate()}/
                              {new Date(book.bookingDate).getMonth()}/
                              {new Date(book.bookingDate).getFullYear()}
                            </td>
                          </tr>
                          <tr>
                            <td>Reporting Time</td>
                            <td>{book.pickupTime}</td>
                          </tr>
                          <tr>
                            <td>Reporting Place</td>
                            <td>{book.travelerInfo.pickupLocation}</td>
                          </tr>
                          <tr>
                            <td>Car Quantity</td>
                            <td>{book.carQuantity}</td>
                          </tr>
                          <tr>
                            <td>Booked For Days</td>
                            <td>{book.totalDays}</td>
                          </tr>
                          <tr>
                            <td>Travel Status</td>
                            <td>
                              {book.travelStatus ? "Completed" : "Pending"}
                            </td>
                          </tr>
                          <tr>
                            <td>Arrival Status</td>
                            <td>
                              {book.arrived.arrivedStatus
                                ? "Arrived"
                                : "Not arrived yet"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Traveller & Tour Agent Info  */}
                <div className="col-md-5 col-12">
                  <div className="card">
                    <div className="card__header">
                      <h3>Traveller Details</h3>
                    </div>
                    <div className="card__body">
                      <table>
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>{book.travelerInfo?.travelerName}</td>
                          </tr>
                          <tr>
                            <td>Mobile</td>
                            <td>{book.travelerInfo?.travelerMobile}</td>
                          </tr>
                          <tr>
                            <td>Alternative Mobile</td>
                            <td>{book.travelerInfo?.travelerAltMobile}</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>{book.travelerInfo?.travelerEmail}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card__header">
                      <h3>Tour Agent Details</h3>
                    </div>
                    <div className="card__body">
                      <table>
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>{book.userId?.name}</td>
                          </tr>
                          <tr>
                            <td>Mobile</td>
                            <td>{book.userId?.phone}</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>{book.userId?.email}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* Tour, Car & Driver Details  */}
                <div className="col-md-5 col-12">
                  <div className="card">
                    {/* Car Details  */}
                    <div className="card__header">
                      <h3>Car Details</h3>
                    </div>
                    <div className="card__body">
                      <table>
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>{book.car?.carName}</td>
                          </tr>
                          <tr>
                            <td>Model</td>
                            <td>{book.car?.carModel}</td>
                          </tr>
                          <tr>
                            <td>Availability</td>
                            <td>
                              {book.car?.availability
                                ? "Available"
                                : "Not Available"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Driver Details  */}
                    <div className="card__header">
                      <h3>Driver Details</h3>
                    </div>
                    <div className="card__body">
                      <table>
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>{book.driver?.driverName}</td>
                          </tr>
                          <tr>
                            <td>Phone</td>
                            <td>{book.driver?.driverMobile}</td>
                          </tr>
                          <tr>
                            <td>Address</td>
                            <td>{book.driver?.driverAddress}</td>
                          </tr>
                          <tr>
                            <td>Status</td>
                            <td>
                              {book.driver?.driverStatus
                                ? "Active"
                                : "Not Active"}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Tour Details */}
                  <div className="card">
                    <div className="card__header">
                      <h3>Tour Details</h3>
                    </div>
                    <div className="card__body">
                      <table>
                        <tbody>
                          <tr>
                            <td>Pickup</td>
                            <td>Dropoff</td>
                            <td>Booked For Days</td>
                          </tr>
                          {book?.travelInfo.map((it, index) => {
                            return (
                              <tr key={index}>
                                <td>{it?.start}</td>
                                <td>{it?.end}</td>
                                <td>{it?.days}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* payment info  */}
                <div className="col-md-7 col-12">
                  <div className="card">
                    <div className="card__header">
                      <h3>Payment Details</h3>
                    </div>
                    <div className="card__body">
                      <table>
                        <tbody>
                          <tr>
                            <td>Total Price</td>
                            <td>{book?.price}</td>
                          </tr>
                          <tr>
                            <td>Agent Markup</td>
                            <td>{book?.markup}</td>
                          </tr>
                          <tr>
                            <td>Due Amount</td>
                            <td>{book?.dueAmount}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card__footer">
                      <h3>Payment Cycle</h3>
                      <table>
                        <tbody>
                          <tr>
                            <td>Date</td>
                            <td>Payment Id</td>
                            <td>Amount</td>
                            <td>Taken By</td>
                          </tr>
                          {book?.payment.map((it, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  {new Date(it.date).getDate()}/
                                  {new Date(it.date).getMonth()}/
                                  {new Date(it.date).getFullYear()}
                                </td>
                                <td>{it?.paymentId}</td>
                                <td>&#8377; {it?.amount}</td>
                                <td>{it?.driverName}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card__header">
                      <h3>Driver Payment Details</h3>
                    </div>
                    <div className="card__body">
                      <table>
                        <tbody>
                          <tr>
                            <td>Due Amount</td>
                            <td>{driverPay?.dueAmount}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="card__footer">
                      <h3>Payment Cycle</h3>
                      <table>
                        <tbody>
                          <tr>
                            <td>Date</td>
                            <td>Payment Id</td>
                            <td>Amount</td>
                            <td>Payment Mode</td>
                          </tr>
                          {driverPay?.payment.map((it, index) => {
                            return (
                              <tr key={index}>
                                <td>
                                  {new Date(it?.date).getDate()}/
                                  {new Date(it?.date).getMonth()}/
                                  {new Date(it?.date).getFullYear()}
                                </td>
                                <td>{it?._id}</td>
                                <td>&#8377; {it?.amount}</td>
                                <td>{it?.paymentMood}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h2 className="page-header">Somthing Went Wrong. Try Again!</h2>
          )}
        </>
      )}
    </div>
  );
};

export default BookingsDetails;

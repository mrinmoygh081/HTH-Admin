import React from "react";
import { useLocation } from "react-router-dom";

const BookingsDetails = () => {
  //   const params = useParams(); // for paramater pass like /bookings/:id
  const { state } = useLocation(); // get passing data from Link
  console.log(state);

  return (
    <div>
      {state ? (
        <>
          <h2 className="page-header">{state.pnrno}</h2>
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
                          {new Date(state.bookingDate).getDate()}/
                          {new Date(state.bookingDate).getMonth()}/
                          {new Date(state.bookingDate).getFullYear()}
                        </td>
                      </tr>
                      <tr>
                        <td>Reporting Time</td>
                        <td>{state.pickupTime}</td>
                      </tr>
                      <tr>
                        <td>Reporting Place</td>
                        <td>{state.travelerInfo.pickupLocation}</td>
                      </tr>
                      <tr>
                        <td>Booked For Days</td>
                        <td>{state.totalDays}</td>
                      </tr>
                      <tr>
                        <td>Travel Status</td>
                        <td>{state.travelStatus ? "Completed" : "Pending"}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Traveller Info  */}
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
                        <td>{state.travelerInfo.travelerName}</td>
                      </tr>
                      <tr>
                        <td>Mobile</td>
                        <td>{state.travelerInfo.travelerMobile}</td>
                      </tr>
                      <tr>
                        <td>Alternative Mobile</td>
                        <td>{state.travelerInfo.travelerAltMobile}</td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>{state.travelerInfo.travelerEmail}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Driver Details  */}
            <div className="col-md-5 col-12">
              <div className="card">
                <div className="card__header">
                  <h3>Car & Driver Details</h3>
                </div>
                <div className="card__body">
                  <table>
                    <tbody>
                      <tr>
                        <td>Driver Name</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>Phone</td>
                        <td>{}</td>
                      </tr>
                      <tr>
                        <td>Car Model</td>
                        <td>{state.carModel}</td>
                      </tr>
                      <tr>
                        <td>Car Quantity</td>
                        <td>{state.carQuantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
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
                      {state.travelInfo.map((it, index) => {
                        return (
                          <tr key={index}>
                            <td>{it.start}</td>
                            <td>{it.end}</td>
                            <td>{it.days}</td>
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
                        <td>{state.price}</td>
                      </tr>
                      <tr>
                        <td>Agent Markup</td>
                        <td>{state.markup}</td>
                      </tr>
                      <tr>
                        <td>Due Amount</td>
                        <td>{state.dueAmount}</td>
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
                      {state.payment.map((it, index) => {
                        return (
                          <tr key={index}>
                            <td>
                              {new Date(it.date).getDate()}/
                              {new Date(it.date).getMonth()}/
                              {new Date(it.date).getFullYear()}
                            </td>
                            <td>{it.paymentId}</td>
                            <td>&#8377; {it.amount}</td>
                            <td>{it.driverName}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Tour Details */}
            <div className="col-md-5 col-12"></div>
          </div>
        </>
      ) : (
        <h2 className="page-header">Somthing Went Wrong. Try Again!</h2>
      )}
    </div>
  );
};

export default BookingsDetails;

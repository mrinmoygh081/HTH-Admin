import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";

const CarsDetails = () => {
  //   const params = useParams(); // for paramater pass like /bookings/:id
  const { state } = useLocation(); // get passing data from Link

  return (
    <div>
      {state ? (
        <>
          <h2 className="page-header">{state.registration[0].CarNumber}</h2>
          <div className="row">
            {/* Cars Details */}
            <div className="col-md-7 col-12">
              <div className="card">
                <div className="card__header">
                  <h3>Cars Details</h3>
                </div>
                <div className="card__body">
                  <table>
                    <tbody>
                      <tr>
                        <td>Car Name</td>
                        <td>{state.carName}</td>
                      </tr>
                      <tr>
                        <td>Car Model</td>
                        <td>{state.carModel}</td>
                      </tr>
                      {state.registration.map((it, index) => {
                        return (
                          <Fragment key={index}>
                            <tr>
                              <td>Registration Number</td>
                              <td>{it.registrationNo}</td>
                            </tr>
                            <tr>
                              <td>Registration Expire</td>
                              <td>
                                {new Date(it.registrationExpire).getDate()}/
                                {new Date(it.registrationExpire).getMonth()}/
                                {new Date(it.registrationExpire).getFullYear()}
                              </td>
                            </tr>
                          </Fragment>
                        );
                      })}
                      <tr>
                        <td>Permit</td>
                        <td>
                          {state.permit.map((it, index) => {
                            return <Fragment key={index}>{it}, </Fragment>;
                          })}
                        </td>
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
                  <h3>Travel Status</h3>
                </div>
                <div className="card__body">
                  <table>
                    <tbody>
                      <tr>
                        <td>Status</td>
                        <td>
                          {state.travelStatus ? "Not Available" : "Available"}
                        </td>
                      </tr>
                      <tr>
                        <td>Engagement Start</td>
                        <td>
                          {new Date(state.availability.startDate).getDate()}/
                          {new Date(state.availability.startDate).getMonth()}/
                          {new Date(state.availability.startDate).getFullYear()}
                        </td>
                      </tr>
                      <tr>
                        <td>Engagement End</td>
                        <td>
                          {new Date(state.availability.endDate).getDate()}/
                          {new Date(state.availability.endDate).getMonth()}/
                          {new Date(state.availability.endDate).getFullYear()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Owner Info  */}
            <div className="col-md-5 col-12">
              <div className="card">
                <div className="card__header">
                  <h3>Owner Info</h3>
                </div>
                <div className="card__body">
                  <table>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{state.owner.ownerName}</td>
                      </tr>
                      <tr>
                        <td>Mobile</td>
                        <td>{state.owner.ownerMobile}</td>
                      </tr>

                      <tr>
                        <td>Address</td>
                        <td>{state.owner.ownerAddress}</td>
                      </tr>

                      <tr>
                        <td>Owner ID Proof</td>
                        <td>{state.owner.ownerAddress}</td>
                      </tr>

                      <tr>
                        <td>Bank Account</td>
                        <td>{state.owner.ownerAddress}</td>
                      </tr>
                      <tr>
                        <td>Bank IFSC Code</td>
                        <td>{state.owner.ownerAddress}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Driver Info  */}
            <div className="col-md-7 col-12">
              <div className="card">
                <div className="card__header">
                  <h3>Driver Info</h3>
                  <img
                    src={state.driver.driverPhoto}
                    className="card__photo"
                    alt={`Driver Name: ${state.driver.driverName}`}
                  />
                </div>
                <div className="card__body">
                  <table>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{state.driver.driverName}</td>
                      </tr>
                      <tr>
                        <td>Mobile</td>
                        <td>{state.driver.driverMobile}</td>
                      </tr>
                      <tr>
                        <td>Address</td>
                        <td>{state.driver.driverAddress}</td>
                      </tr>
                      {state.driver?.currentLocation && (
                        <tr>
                          <td>
                            Current Location (
                            {new Date(
                              state.driver?.currentLocation?.date
                            ).getDate()}
                            /
                            {new Date(
                              state.driver?.currentLocation?.date
                            ).getMonth()}
                            /
                            {new Date(
                              state.driver?.currentLocation?.date
                            ).getFullYear()}{" "}
                            {new Date(
                              state.driver?.currentLocation?.date
                            ).getHours()}
                            :
                            {new Date(
                              state.driver?.currentLocation?.date
                            ).getMinutes()}
                            )
                          </td>
                          <td>{state.driver?.currentLocation?.location}</td>
                        </tr>
                      )}
                      <tr>
                        <td>Availability</td>
                        <td>
                          {state.driver.driverStatus
                            ? "Available"
                            : "Not available"}
                        </td>
                      </tr>
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
    </div>
  );
};

export default CarsDetails;

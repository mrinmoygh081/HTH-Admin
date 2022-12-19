import React, { useState } from "react";

import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
// import { postAPI } from "../apis";
// import { BASE_URL } from "../config";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import MapSearchInput from "../components/MapSearchInput";
import { checkStateName } from "../utils/checkStateName";
import { toast } from "react-toastify";
import getLatLngLoc from "../utils/getLatLongLoc";
// import { getDistance } from "../utils/getDistance";
import GetDistanceDuration from "../components/GetDistanceDuration";

const AddBooking = () => {
  //   const { loginToken } = useSelector((state) => state.authReducer);
  const animatedComponents = makeAnimated();
  const [bookData, setBookData] = useState({});
  const [travelerInfo, setTravelerInfo] = useState({});
  const [journeyInfo, setJourneyInfo] = useState([
    {
      days: "",
      start: "",
      end: "",
      Sstate: "",
      Estate: "",
      distance: "",
      pLat: "",
      pLng: "",
      dLat: "",
      dLng: "",
    },
  ]);

  const carModelOptions = [
    { value: "Traveller", label: "Traveller" },
    { value: "Sedan", label: "Sedan" },
    { value: "SUV", label: "SUV" },
  ];

  const handleJourneyAdd = () => {
    setJourneyInfo([
      ...journeyInfo,
      {
        days: "",
        end: "",
        Estate: "",
        distance: "",
      },
    ]);
  };

  const handleJourneyRemove = (index) => {
    const list = [...journeyInfo];
    list.splice(index, 1);
    setJourneyInfo(list);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...journeyInfo];
    list[index][name] = value;
    // console.log(list);
    setJourneyInfo(list);
  };

  const addBookingFun = () => {
    let postingData = { ...bookData, travelerInfo };
    console.log(postingData);
  };
  useEffect(() => {
    console.log("bookData", bookData);
    console.log("travelerInfo", travelerInfo);
    console.log("journeyInfo", journeyInfo);
  }, [travelerInfo, bookData, journeyInfo]);

  // set origin and destination
  const handleSelectedPlace = async (details, locTypes, index) => {
    let address = details.value.description;
    let stateName = checkStateName(address);
    console.log("stateName", address);
    console.log(JSON.stringify(details));
    if (stateName && stateName.length === 0) {
      toast(
        "Currently, We're not providing our services on the selected state."
      );
    } else {
      const list = [...journeyInfo];
      const latLngObj = await getLatLngLoc(address);
      list[index][locTypes] = address;
      if (locTypes === "start") {
        list[index]["Sstate"] = stateName[0];
        console.log(latLngObj);
      } else if (locTypes === "end") {
        list[index]["Estate"] = stateName[0];
      }

      console.log(list);
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          <h2 className="page-header text-center">Add New Booking</h2>
          <form id="survey-form">
            <div className="row">
              {/* booking info add  */}
              <div className="col-12 col-md-6">
                <h2 className="page-header">Booking Requirements</h2>
                <div className="form-group">
                  <label id="car_reg_date" htmlFor="car_reg_date">
                    Car Model
                  </label>
                  <CreatableSelect
                    options={carModelOptions}
                    defaultValue={bookData.carModel}
                    components={animatedComponents}
                    name="carModel"
                    isSearchable={false}
                    isClearable={false}
                    isDisabled={false}
                    isLoading={false}
                    onChange={(res) =>
                      setBookData({ ...bookData, carModel: res.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="quantity" htmlFor="quantity">
                    Car Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    className="form-control"
                    placeholder="Enter number of cars required"
                    required
                    value={bookData.carQuantity}
                    onChange={(e) =>
                      setBookData({ ...bookData, carQuantity: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="price" htmlFor="price">
                    Booking Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    placeholder="Enter price"
                    required
                    value={bookData.price}
                    onChange={(e) =>
                      setBookData({ ...bookData, price: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="bookingDate" htmlFor="bookingDate">
                    Reporting Date
                  </label>
                  <input
                    type="date"
                    name="bookingDate"
                    id="bookingDate"
                    className="form-control"
                    placeholder="Enter booking date"
                    required
                    value={bookData.bookingDate}
                    onChange={(e) =>
                      setBookData({ ...bookData, bookingDate: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="pickupTime" htmlFor="pickupTime">
                    Reporting Time
                  </label>
                  <input
                    type="time"
                    name="pickupTime"
                    id="pickupTime"
                    className="form-control"
                    placeholder="Enter reporting time"
                    required
                    value={bookData.pickupTime}
                    onChange={(e) =>
                      setBookData({ ...bookData, pickupTime: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="pickupLocation" htmlFor="pickupLocation">
                    Reporting Place
                  </label>
                  <input
                    type="text"
                    name="pickupLocation"
                    id="pickupLocation"
                    className="form-control"
                    placeholder="Enter reporting location"
                    required
                    value={travelerInfo?.pickupLocation}
                    onChange={(e) =>
                      setTravelerInfo({
                        ...travelerInfo,
                        pickupLocation: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="markup" htmlFor="markup">
                    Markup
                  </label>
                  <input
                    type="number"
                    name="markup"
                    id="markup"
                    className="form-control"
                    placeholder="Enter markup amount"
                    required
                    value={bookData?.markup}
                    onChange={(e) =>
                      setBookData({
                        ...bookData,
                        markup: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* traveller info add  */}
              <div className="col-12 col-md-6">
                <h2 className="page-header">Traveller Requirements</h2>

                <div className="form-group">
                  <label id="travelerName" htmlFor="travelerName">
                    Name
                  </label>
                  <input
                    type="text"
                    name="travelerName"
                    id="travelerName"
                    className="form-control"
                    placeholder="Enter name"
                    required
                    value={travelerInfo?.travelerName}
                    onChange={(e) =>
                      setTravelerInfo({
                        ...travelerInfo,
                        travelerName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="email" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                    value={travelerInfo?.travelerEmail}
                    onChange={(e) =>
                      setTravelerInfo({
                        ...travelerInfo,
                        travelerEmail: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="mobile" htmlFor="mobile">
                    Mobile
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    className="form-control"
                    placeholder="Enter mobile"
                    required
                    value={travelerInfo?.travelerMobile}
                    onChange={(e) =>
                      setTravelerInfo({
                        ...travelerInfo,
                        travelerMobile: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="altMobile" htmlFor="altMobile">
                    Alternative Mobile
                  </label>
                  <input
                    type="number"
                    name="altMobile"
                    id="altMobile"
                    className="form-control"
                    placeholder="Enter alternative mobile"
                    required
                    value={travelerInfo?.travelerAltMobile}
                    onChange={(e) =>
                      setTravelerInfo({
                        ...travelerInfo,
                        travelerAltMobile: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* route of journey */}
              <div className="col-12">
                <h2 className="page-header">Journey Details</h2>

                {/* <div className="multiForm">
                  <div className="multiFormAddon">
                    <div className="form-group">
                      <label id="pickup" htmlFor="pickup">
                        Pickup
                      </label>
                      <input
                        type="text"
                        name="pickup"
                        id="pickup"
                        className="form-control"
                        placeholder="Enter pickup location"
                        required
                        value={journeyInfoFirst?.start}
                        onChange={(e) =>
                          setJourneyInfoFirst({
                            ...journeyInfoFirst,
                            start: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label id="DropOff" htmlFor="DropOff">
                        DropOff
                      </label>
                      <input
                        type="text"
                        name="DropOff"
                        id="DropOff"
                        className="form-control"
                        placeholder="Enter DropOff Location"
                        required
                        value={journeyInfoFirst?.end}
                        onChange={(e) =>
                          setJourneyInfoFirst({
                            ...journeyInfoFirst,
                            end: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label id="days" htmlFor="days">
                        Booked For Days
                      </label>
                      <input
                        type="number"
                        name="days"
                        id="days"
                        className="form-control"
                        placeholder="Enter number of days here..."
                        required
                        value={journeyInfoFirst?.days}
                        onChange={(e) =>
                          setJourneyInfoFirst({
                            ...journeyInfoFirst,
                            days: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div> */}

                {journeyInfo &&
                  journeyInfo.map((journey, index) => (
                    <div key={index} className="multiForm">
                      <GetDistanceDuration />
                      <div className="multiFormAddon">
                        <div className="form-group">
                          <label id="end" htmlFor="end">
                            Pickup Location
                          </label>
                          <MapSearchInput
                            label="Search Your Dropoff Location"
                            onPlaceSelected={(details) => {
                              handleSelectedPlace(details, "start", index);
                            }}
                          />
                        </div>
                        <div className="form-group">
                          <label id="end" htmlFor="end">
                            DropOff
                          </label>
                          <MapSearchInput
                            label="Search Your Dropoff Location"
                            onPlaceSelected={(details) => {
                              handleSelectedPlace(details, "end", index);
                            }}
                          />
                        </div>
                        {/* <div className="form-group">
                          <label id="end" htmlFor="end">
                            Next DropOff
                          </label>
                          <input
                            type="text"
                            name="end"
                            id="end"
                            className="form-control"
                            placeholder="Enter DropOff Location"
                            required
                            value={journey?.start}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div> */}
                        <div className="form-group">
                          <label id="days" htmlFor="days">
                            Booked For Days
                          </label>
                          <input
                            type="number"
                            name="days"
                            id="days"
                            className="form-control"
                            placeholder="Enter number of days here..."
                            required
                            value={journey.days}
                            onChange={(e) => handleInputChange(e, index)}
                          />
                        </div>
                      </div>
                      <div className="remove_item">
                        <button onClick={() => handleJourneyRemove(index)}>
                          <i className="bx bx-x"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                <div className="multiFormAddNew">
                  <button type="button" onClick={() => handleJourneyAdd()}>
                    Add Next DropOff
                  </button>
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <button
                    type="button"
                    id="submit"
                    className="submit-button m-auto"
                    onClick={() => addBookingFun()}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddBooking;

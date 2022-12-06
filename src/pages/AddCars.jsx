import React, { useEffect, useState } from "react";

import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { BASE_URL } from "../config";
import { useSelector } from "react-redux";
import { postAPI } from "../apis";

const statesOptions = [
  { value: "arunachal pradesh", label: "Arunachal Pradesh" },
  { value: "assam", label: "Assam" },
  { value: "manipur", label: "Manipur" },
  { value: "meghalaya", label: "Meghalaya" },
  { value: "mizoram", label: "Mizoram" },
  { value: "nagaland", label: "Nagaland" },
  { value: "tripura", label: "Tripura" },
];
const docsOptions = [
  { value: "driving-licence", label: "Driving Licence" },
  { value: "rc", label: "RC" },
  { value: "insurance", label: "Car Insurance" },
  { value: "permit", label: "Permit" },
];

const AddCars = () => {
  const { loginToken } = useSelector((state) => state.authReducer);
  const animatedComponents = makeAnimated();
  const [carData, setCarData] = useState({
    driverPhoto:
      "ic-man-sitting-in-the-driving-seat-of-the-car-and-looking-back-.jpg?ver=6",
    documentFile: "http://www.africau.edu/images/default/sample.pdf",
    startDate: "2021-06-19",
    endDate: "2021-07-19",
  });
  // const [optionSelected, setOptionSelected] = useState(null);

  useEffect(() => {
    console.log(JSON.stringify(carData));
  }, [carData]);

  const addCarBtn = async () => {
    let requestOptions = JSON.stringify(carData);

    const url = `${BASE_URL}/admin/add-car-details`;

    let res = await postAPI(requestOptions, url, loginToken);
    console.log(res);
    if (res?.status === 1) {
      alert("Car added successfully.");
    } else {
      alert(res?.message);
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          <h2 className="page-header text-center">
            Add Car with Driver and Owner
          </h2>
          <form id="survey-form">
            <div className="row">
              {/* car details  */}
              <div className="col-12 col-md-6">
                <h2 className="page-header">Car Details</h2>
                <div className="form-group">
                  <label id="car_name" htmlFor="car_name">
                    Car Name
                  </label>
                  <input
                    type="text"
                    name="car_name"
                    id="car_name"
                    className="form-control"
                    placeholder="Enter car name"
                    required
                    value={carData.carName}
                    onChange={(e) => {
                      setCarData({ ...carData, carName: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="car_model" htmlFor="car_model">
                    Car Model
                  </label>
                  <input
                    type="text"
                    name="car_model"
                    id="car_model"
                    className="form-control"
                    placeholder="Enter car model"
                    required
                    value={carData.carModel}
                    onChange={(e) => {
                      setCarData({ ...carData, carModel: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="car_number" htmlFor="car_number">
                    Car Number
                  </label>
                  <input
                    type="text"
                    name="car_number"
                    id="car_number"
                    className="form-control"
                    placeholder="Enter car number"
                    required
                    value={carData.CarNumber}
                    onChange={(e) => {
                      setCarData({
                        ...carData,
                        CarNumber: e.target.value.toUpperCase(),
                      });
                    }}
                    style={{ textTransform: "uppercase" }}
                  />
                </div>
                <div className="form-group">
                  <label id="car_reg" htmlFor="car_reg">
                    Registration Number
                  </label>
                  <input
                    type="text"
                    name="car_reg"
                    id="car_reg"
                    className="form-control"
                    placeholder="Enter registration number"
                    required
                    value={carData.registrationNo}
                    onChange={(e) => {
                      setCarData({
                        ...carData,
                        registrationNo: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="car_reg_date" htmlFor="car_reg_date">
                    Registration Expire Date
                  </label>
                  <input
                    type="date"
                    name="car_reg_date"
                    id="car_reg_date"
                    className="form-control"
                    placeholder="Enter registration expire date"
                    required
                    value={carData.registrationExpire}
                    onChange={(e) => {
                      setCarData({
                        ...carData,
                        registrationExpire: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="car_reg_date" htmlFor="car_reg_date">
                    States Permit
                  </label>
                  <CreatableSelect
                    options={statesOptions}
                    defaultValue={carData.permit}
                    isMulti
                    components={animatedComponents}
                    name="state_permit"
                    isSearchable={true}
                    isClearable={true}
                    isDisabled={false}
                    isLoading={false}
                    onChange={(res) => {
                      let arr = [];
                      res.map((val) => {
                        arr.push(val.value);
                        setCarData({ ...carData, permit: arr });
                        return arr;
                      });
                    }}
                  />
                </div>
                {/* 
                <div className="form-group">
                  <label id="number-label" htmlFor="number">
                    Age<span className="clue">(optional)</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="number"
                    min={10}
                    max={99}
                    className="form-control"
                    placeholder="Age"
                  />
                </div>
                <div className="form-group">
                  <p>Which option best describes your current role?</p>
                  <select
                    id="dropdown"
                    name="role"
                    className="form-control"
                    required=""
                  >
                    <option disabled="" value="">
                      Select current role
                    </option>
                    <option value="student">Student</option>
                    <option value="job">Full Time Job</option>
                    <option value="learner">Full Time Learner</option>
                    <option value="preferNo">Prefer not to say</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <p>Would you recommend freeCodeCamp to a friend?</p>
                  <label>
                    <input
                      name="user-recommend"
                      defaultValue="definitely"
                      type="radio"
                      className="input-radio"
                      defaultChecked=""
                    />
                    Definitely
                  </label>
                  <label>
                    <input
                      name="user-recommend"
                      defaultValue="maybe"
                      type="radio"
                      className="input-radio"
                    />
                    Maybe
                  </label>
                  <label>
                    <input
                      name="user-recommend"
                      defaultValue="not-sure"
                      type="radio"
                      className="input-radio"
                    />
                    Not sure
                  </label>
                </div>
                <div className="form-group">
                  <p>What is your favorite feature of freeCodeCamp?</p>
                  <select
                    id="most-like"
                    name="mostLike"
                    className="form-control"
                    required=""
                  >
                    <option disabled="" value="">
                      Select an option
                    </option>
                    <option value="challenges">Challenges</option>
                    <option value="projects">Projects</option>
                    <option value="community">Community</option>
                    <option value="openSource">Open Source</option>
                  </select>
                </div> */}
              </div>
              {/* owner details */}
              <div className="col-12 col-md-6">
                <h2 className="page-header">Owner Details</h2>
                <div className="form-group">
                  <label id="owner_name" htmlFor="owner_name">
                    Owner Name
                  </label>
                  <input
                    type="text"
                    name="owner_name"
                    id="owner_name"
                    className="form-control"
                    placeholder="Enter owner name"
                    required
                    value={carData.ownerName}
                    onChange={(e) => {
                      setCarData({ ...carData, ownerName: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="owner_phone" htmlFor="owner_phone">
                    Owner Phone
                  </label>
                  <input
                    type="number"
                    name="owner_phone"
                    id="owner_phone"
                    className="form-control"
                    placeholder="Enter owner phone"
                    required
                    value={carData.ownerMobile}
                    onChange={(e) => {
                      setCarData({ ...carData, ownerMobile: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="owner_bank_account" htmlFor="owner_bank_account">
                    Owner Bank Account
                  </label>
                  <input
                    type="text"
                    name="owner_bank_account"
                    id="owner_bank_account"
                    className="form-control"
                    placeholder="Enter owner bank account here..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label id="owner_bank_ifsc" htmlFor="owner_bank_ifsc">
                    Owner Bank IFSC Code
                  </label>
                  <input
                    type="text"
                    name="owner_bank_ifsc"
                    id="owner_bank_ifsc"
                    className="form-control"
                    placeholder="Enter owner bank account here..."
                    required
                  />
                </div>
                <div className="form-group">
                  <p>Owner Address</p>
                  <textarea
                    id="owner_address"
                    className="input-textarea"
                    name="owner_address"
                    placeholder="Enter your owner address here..."
                    value={carData.ownerAddress}
                    onChange={(e) => {
                      setCarData({ ...carData, ownerAddress: e.target.value });
                    }}
                  />
                </div>
              </div>

              {/* driver details  */}
              <div className="col-12 col-md-6">
                <h2 className="page-header">Driver Details</h2>
                <div className="form-group">
                  <label id="driver_name" htmlFor="driver_name">
                    Driver Name
                  </label>
                  <input
                    type="text"
                    name="driver_name"
                    id="driver_name"
                    className="form-control"
                    placeholder="Enter driver name"
                    required
                    value={carData.driverName}
                    onChange={(e) => {
                      setCarData({ ...carData, driverName: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="car_reg_date" htmlFor="car_reg_date">
                    Documents List
                  </label>
                  <CreatableSelect
                    options={docsOptions}
                    defaultValue={carData.documentNames}
                    isMulti
                    components={animatedComponents}
                    name="document-names"
                    isSearchable={true}
                    isClearable={true}
                    isDisabled={false}
                    isLoading={false}
                    onChange={(res) => {
                      let arr = [];
                      res.map((val) => {
                        arr.push(val.value);
                        setCarData({ ...carData, documentNames: arr });
                        return arr;
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="driver_docs" htmlFor="driver_docs">
                    All Documents
                  </label>
                  <input
                    type="file"
                    name="driver_docs"
                    id="driver_docs"
                    className="form-control"
                    placeholder="Enter driver licence"
                    accept="application/pdf"
                    required
                  />
                </div>
                <div className="form-group">
                  <p>Driver Address</p>
                  <textarea
                    id="driver_address"
                    className="input-textarea"
                    name="driver_address"
                    placeholder="Enter your driver address here..."
                    value={carData.driverAddress}
                    onChange={(e) => {
                      setCarData({ ...carData, driverAddress: e.target.value });
                    }}
                  />
                </div>
              </div>

              {/* driver auth set */}
              <div className="col-12 col-md-6">
                <h2 className="page-header">Set Driver Login</h2>

                <div className="form-group">
                  <label id="driver_phone" htmlFor="driver_phone">
                    Driver Phone
                  </label>
                  <input
                    type="number"
                    name="driver_phone"
                    id="driver_phone"
                    className="form-control"
                    placeholder="Enter driver phone"
                    required
                    value={carData.driverMobile}
                    onChange={(e) => {
                      setCarData({ ...carData, driverMobile: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="driver_pw" htmlFor="driver_pw">
                    Set Password for Driver
                  </label>
                  <input
                    type="password"
                    name="driver_pw"
                    id="driver_pw"
                    className="form-control"
                    placeholder="Set Password for Driver"
                    required
                    value={carData.password}
                    onChange={(e) => {
                      setCarData({ ...carData, password: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="driver_retype_pw" htmlFor="driver_retype_pw">
                    Retype Password for Driver
                  </label>
                  <input
                    type="password"
                    name="driver_retype_pw"
                    id="driver_retype_pw"
                    className="form-control"
                    placeholder="Retype Password for Driver"
                    required
                    value={carData.passwordConfirm}
                    onChange={(e) => {
                      setCarData({
                        ...carData,
                        passwordConfirm: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label id="email-label" htmlFor="email">
                    Driver Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Driver's Email"
                    required
                    value={carData.email}
                    onChange={(e) => {
                      setCarData({ ...carData, email: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <button
                    type="button"
                    id="submit"
                    onClick={() => addCarBtn()}
                    className="submit-button m-auto"
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

export default AddCars;

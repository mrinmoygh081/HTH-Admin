import React, { useState } from "react";

import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { postAPI } from "../apis";
import { BASE_URL } from "../config";
import { useSelector } from "react-redux";

const carModelOptions = [
  { value: "Traveller", label: "Traveller" },
  { value: "Sedan", label: "Sedan" },
  { value: "SUV", label: "SUV" },
];

const AddPlacePriceFrom = () => {
  const { loginToken } = useSelector((state) => state.authReducer);
  const animatedComponents = makeAnimated();
  const [placePrice, setPlacePrice] = useState({
    carModel: "",
    place: "",
    price: "",
    perKmPrice: "",
  });

  console.log(placePrice);

  const addPlacePriceFun = async () => {
    let requestOptions = JSON.stringify(placePrice);

    const url = `${BASE_URL}/admin/add-place-price`;

    let res = await postAPI(requestOptions, url, loginToken);
    console.log(res);
    if (res.status === 1) {
      alert("Place Price added successfully");
    } else {
      alert(res.message);
    }
  };

  return (
    <>
      <section>
        <div className="container-fluid">
          {/* <h2 className="page-header text-center">Add New Place And Price</h2> */}
          <form id="survey-form">
            <div className="row justify-content-center">
              {/* place-price  */}
              <div className="col-12 col-md-6">
                <h2 className="page-header">Add New Place And Price</h2>
                <div className="form-group">
                  <label id="car_reg_date" htmlFor="car_reg_date">
                    Car Model
                  </label>
                  <CreatableSelect
                    options={carModelOptions}
                    defaultValue={placePrice.carModel}
                    components={animatedComponents}
                    name="carModel"
                    isSearchable={true}
                    isClearable={true}
                    isDisabled={false}
                    isLoading={false}
                    onChange={(res) =>
                      setPlacePrice({ ...placePrice, carModel: res.label })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="place" htmlFor="place">
                    Place
                  </label>
                  <input
                    type="text"
                    name="place"
                    id="place"
                    className="form-control"
                    placeholder="Enter place name"
                    required
                    value={placePrice.place}
                    onChange={(e) =>
                      setPlacePrice({ ...placePrice, place: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="price" htmlFor="price">
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="form-control"
                    placeholder="Enter price"
                    required
                    value={placePrice.price}
                    onChange={(e) =>
                      setPlacePrice({ ...placePrice, price: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label id="perKMprice" htmlFor="perKMprice">
                    PerKM perKMPrice
                  </label>
                  <input
                    type="number"
                    name="perKMprice"
                    id="perKMprice"
                    className="form-control"
                    placeholder="Enter perKM price"
                    required
                    value={placePrice.perKmPrice}
                    onChange={(e) =>
                      setPlacePrice({
                        ...placePrice,
                        perKmPrice: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <button
                    type="button"
                    id="submit"
                    className="submit-button m-auto"
                    onClick={() => addPlacePriceFun()}
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

export default AddPlacePriceFrom;

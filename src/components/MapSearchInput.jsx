import React, { useState } from "react";
import { useEffect } from "react";

// import GoogleAutoComplete from "react-google-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "react-toastify";

const MapSearchInput = ({ label, onPlaceSelected }) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value) {
      console.log(value.value.description);
      onPlaceSelected(value);
    }
  }, [value, onPlaceSelected]);

  return (
    <div>
      {/* <GoogleAutoComplete
        apiKey="AIzaSyC_WF6v8mlYS1PU_j3wKvDVveIWFaM0Mvw"
        className="form-control"
        onPlaceSelected={(details) => onPlaceSelected(details)}
        options={{
          types: ["(regions)"],
          componentRestrictions: { country: "in" },
        }}
        placeholder={label || "Please search the location..."}
      /> */}
      <GooglePlacesAutocomplete
        apiKey="AIzaSyC_WF6v8mlYS1PU_j3wKvDVveIWFaM0Mvw"
        selectProps={{
          value,
          onChange: setValue,
        }}
        autocompletionRequest={{
          bounds: [
            { lat: 23.63936, lng: 68.14712 },
            { lat: 28.20453, lng: 97.34466 },
          ],
          componentRestrictions: {
            country: ["in"],
          },
        }}
        onLoadFailed={(error) => toast(error)}
        placeholder={label || "Please search the location..."}
      />
    </div>
  );
};

export default MapSearchInput;

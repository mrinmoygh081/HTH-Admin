// we can get origin and destination name with distance, duration by providing Lat Lng of origin and destination and also get map by providing height and width of map in GoogleMap component/tag
import React from "react";
import {
  GoogleMap,
  LoadScript,
  DistanceMatrixService,
} from "@react-google-maps/api";

const GetDistanceDuration = () => {
  const handleDistanceCal = (res) => {
    console.log("distance", res.rows[0].elements[0].distance);
    console.log("duration", res.rows[0].elements[0].duration);
  };
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyC_WF6v8mlYS1PU_j3wKvDVveIWFaM0Mvw">
        <GoogleMap>
          <DistanceMatrixService
            options={{
              destinations: [{ lat: 1.296788, lng: 103.778961 }],
              origins: [{ lat: 1.291692, lng: 103.780267 }],
              travelMode: "DRIVING",
            }}
            callback={(response) => handleDistanceCal(response)}
          />
        </GoogleMap>
      </LoadScript>
    </>
  );
};

export default GetDistanceDuration;

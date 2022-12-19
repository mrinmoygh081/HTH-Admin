import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const getLatLngLoc = async (address) => {
  return await geocodeByAddress(address)
    .then((results) => getLatLng(results[0]))
    .then(({ lat, lng }) => ({ lat, lng }))
    .catch((e) => console.log("GetLatLngLoc", e));
};

export default getLatLngLoc;

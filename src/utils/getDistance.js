export const getDistance = async (pLat, pLng, dLat, dLng) => {
  const mode = "driving"; // 'walking';
  const origin = `${pLat} ${pLng}`;
  const destination = `${dLat} ${dLng}`;
  const APIKEY = "AIzaSyC_WF6v8mlYS1PU_j3wKvDVveIWFaM0Mvw";
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;

  return await fetch(url)
    .then((response) => response.json(), {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((responseJson) => {
      if (responseJson.routes.length) {
        let res = Math.round(
          responseJson.routes[0].legs[0].distance.value / 1000
        );
        // console.log(res);
        return res;
      }
    })
    .catch((e) => {
      console.warn(e);
    });
};

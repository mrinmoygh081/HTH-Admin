import axios from "axios";
import { BASE_URL } from "../config";

export const bookingSingle = (id, token) => {
  //   console.log(`Booking ${id} with token ${token}`);

  var config = {
    method: "get",
    url: `${BASE_URL}/admin/booking/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error("bookingSingle", error);
    });
  return data;
};

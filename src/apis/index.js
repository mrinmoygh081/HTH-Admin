import axios from "axios";

export const getAPI = (url, token) => {
  //   console.log(`Booking ${id} with token ${token}`);

  var config = {
    method: "get",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error("getAPI", error);
    });
  return res;
};

export const postAPI = (data, url, token) => {
  console.log(`${data} with url ${url} token ${token}`);

  var config = {
    method: "post",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  const res = axios(config)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error("postAPI", error);
      alert("Something went wrong! Please try again later.");
      return error;
    });
  return res;
};

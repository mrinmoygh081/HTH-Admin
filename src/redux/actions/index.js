export const loadingStart = () => {
  return {
    type: "LOADINGSTART",
  };
};

export const loadingEnd = () => {
  return {
    type: "LOADINGEND",
  };
};

export const loginFun = (loginUserData) => {
  return {
    type: "LOGIN",
    payload: loginUserData,
  };
};

export const logoutFun = () => {
  return {
    type: "LOGOUT",
  };
};

export const loadBookingDataFun = (bookingData) => {
  return {
    type: "LOADBOOKINGDATA",
    bookingLoad: bookingData,
  };
};

export const loadcarsDataFun = (carsData) => {
  return {
    type: "LOADCARSDATA",
    carsLoad: carsData,
  };
};

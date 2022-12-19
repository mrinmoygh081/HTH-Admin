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
export const loadSingleBookingDataFun = (bookingData) => {
  return {
    type: "LOADSINGLEBOOKINGDATA",
    bookingLoad: bookingData,
  };
};
export const availableCarsToAssign = (data) => {
  return {
    type: "AVAILABLECARS",
    availableCars: data,
  };
};
export const assignDriver = (data) => {
  return {
    type: "ASSIGNDRIVER",
    assignDriver: data,
  };
};
export const loadcarsDataFun = (carsData) => {
  return {
    type: "LOADCARSDATA",
    carsLoad: carsData,
  };
};
export const getPlacePrice = (data) => {
  return {
    type: "GETPLACEPRICE",
    placePriceData: data,
  };
};

export const loadTourAgentsReq = (agentReqs) => {
  return {
    type: "LOADTOURAGENTREQ",
    payload: agentReqs,
  };
};

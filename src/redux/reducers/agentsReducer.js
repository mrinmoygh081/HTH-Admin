let initialState = null;

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADTOURAGENTREQ":
      return action.payload;
    default:
      return state;
  }
};

export default bookingReducer;

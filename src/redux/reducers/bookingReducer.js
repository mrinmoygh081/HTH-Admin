let initialState = null;

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADBOOKINGDATA":
      return action.bookingLoad;
    default:
      return state;
  }
};

export default bookingReducer;

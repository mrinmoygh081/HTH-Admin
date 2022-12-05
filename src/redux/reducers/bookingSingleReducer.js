let initialState = null;

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADSINGLEBOOKINGDATA":
      return action.bookingLoad;
    default:
      return state;
  }
};

export default bookingReducer;

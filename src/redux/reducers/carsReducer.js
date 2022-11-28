let initialState = null;

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADCARSDATA":
      return action.carsLoad;
    default:
      return state;
  }
};

export default carsReducer;

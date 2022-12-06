let initialState = null;

const availableCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AVAILABLECARS":
      return action.availableCars;
    default:
      return state;
  }
};

export default availableCarsReducer;

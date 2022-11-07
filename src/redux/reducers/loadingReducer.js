let initialState = false;

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADINGSTART":
      return (state = true);
    case "LOADINGEND":
      return (state = false);
    default:
      return state;
  }
};

export default loadingReducer;

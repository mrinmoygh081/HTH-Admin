let initialState = null;

const getPlacePriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETPLACEPRICE":
      return action.placePriceData;
    default:
      return state;
  }
};

export default getPlacePriceReducer;

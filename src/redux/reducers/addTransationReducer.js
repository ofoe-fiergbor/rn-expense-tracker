const initialState = [];

const addTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default addTransactionReducer;

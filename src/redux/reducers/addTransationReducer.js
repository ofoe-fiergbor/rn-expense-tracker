let initialState = {
  expTransactions: [],
  incTransactions: [],
};

const addTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_EXP_VALUES":
      return {
        expTransactions: action.payload,
      };
    case "GET_ALL_INC_VALUES":
      return {
        incTransactions: action.payload,
      };
    default:
      return state;
  }
};

export default addTransactionReducer;

let initialState =  []


const addIncomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_INC_VALUES":
      return [...state, action.payload]
    default:
      return state;
  }
};

export default addIncomeReducer;

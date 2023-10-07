type actionType = {
  type: "INCREMENT" | "DECREMENT";
  payload?: number;
};

const counterReducer = (state = 0, action: actionType) => {
  switch (action.type) {
    case "INCREMENT":
      return action.payload ? state + action.payload : state;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;

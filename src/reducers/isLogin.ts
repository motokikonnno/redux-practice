type actionType = {
  type: "LOGIN";
};

const isLoginReducer = (state = false, action: actionType) => {
  switch (action.type) {
    case "LOGIN":
      return !state;
    default:
      return state;
  }
};

export default isLoginReducer;

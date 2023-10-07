export const increment = (number?: number) => {
  return {
    type: "INCREMENT" as "INCREMENT",
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT" as "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "LOGIN",
  };
};

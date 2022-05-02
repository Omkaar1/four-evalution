// action types

// Action Creators

export const ADD_ORDER = "ADD_ORDER";

export const addUser = (data) => {
  return {
    type: ADD_ORDER,
    payload: data,
  };
};

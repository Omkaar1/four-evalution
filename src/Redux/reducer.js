import { ADD_ORDER } from "./actions";

const init = { orders: [], loading: false, error: false };

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_ORDER:
      return { ...store, orders: payload };
    default:
      return store;
  }
};

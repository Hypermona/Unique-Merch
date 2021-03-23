import * as ActionTyes from "./ActionTypes";

export const cart = (state = [], action) => {
  switch (action.type) {
    case ActionTyes.ADD_CART_ITEM:
      return state.concat(action.payload);
    case ActionTyes.DELETE_CART_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

import * as ActionTypes from "./ActionTypes";

export const orders = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.ADD_ORDER:
      if (state.some((el) => el === action.payload)) return state;
      else return state.concat(action.payload);
    case ActionTypes.REMOVE_ORDER:
      return state.filter((or) => or.id !== action.payload);
    default:
      return state;
  }
};

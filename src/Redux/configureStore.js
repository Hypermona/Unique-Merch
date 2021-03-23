import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { favorites } from "./favorites";
import { cart } from "./cart";
import { orders } from "./order";
export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      favorites,
      cart,
      orders,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

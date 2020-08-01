import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { favorites } from "./favorites";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      favorites,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};

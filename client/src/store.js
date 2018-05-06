import { createStore, combineReducers } from "redux";
import { waterReducer, sunReducer } from "./reducers/api";

const store = createStore(
  combineReducers({
    water: waterReducer,
    sun: sunReducer
  })
);

export default store;

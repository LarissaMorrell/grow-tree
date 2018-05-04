import { createStore } from "redux";
import { populationReducer } from "./reducers/api";

export default createStore(populationReducer);

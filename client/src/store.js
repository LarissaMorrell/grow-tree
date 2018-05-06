import { createStore } from "redux";
import { resourcesReducer } from "./reducers/api";

export default createStore(resourcesReducer);

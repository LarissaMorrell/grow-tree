import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { resourcesReducer } from "./reducers/api";

const store = createStore(resourcesReducer, applyMiddleware(thunk));

export default store;

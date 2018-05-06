import { WATER_PLANT, SUN_PLANT } from "../actions/resources";

const initialState = {
  sun: 0,
  water: 0
};

export const resourcesReducer = (state = initialState, action) => {
  if (action.type === WATER_PLANT) {
    return Object.assign({}, state, { water: ++state.water });
  }
  if (action.type === SUN_PLANT) {
    return Object.assign({}, state, { sun: ++state.sun });
  }
  return state;
};

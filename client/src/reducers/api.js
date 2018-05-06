import { WATER_PLANT, SUN_PLANT } from "../actions/resources";

const initialState = {
  sun: 0,
  water: 0
};

export const waterReducer = (state = initialState, action) => {
  if (action.type === WATER_PLANT) {
    return Object.assign({}, state, { water: state.water++ });
  }
  return state;
};

export const sunReducer = (state = initialState, action) => {
  if (action.type === SUN_PLANT) {
    return Object.assign({}, state, { water: state.sun++ });
  }
  return state;
};

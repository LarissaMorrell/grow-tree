import { SAVE_WATER } from "../actions/water";

const initialState = {
  water: false
};

export const waterReducer = (state = initialState, action) => {
  if (action.type === SAVE_WATER) {
    return Object.assign({}, state, { water: action.water });
  }
  return state;
};

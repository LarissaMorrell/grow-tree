import { WATER_PLANT } from "../actions/water";

const initialState = {
  water: 0
};

export const waterReducer = (state = initialState, action) => {
  if (action.type === WATER_PLANT) {
    console.log(action.water);
    return Object.assign({}, state, { water: action.water });
  }
  return state;
};

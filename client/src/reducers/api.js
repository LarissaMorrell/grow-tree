import { SAVE_POPULATION } from "../actions/population";

const initialState = {
  population: 0
};

export const populationReducer = (state = initialState, action) => {
  if (action.type === SAVE_POPULATION) {
    return Object.assign({}, state, { population: action.population });
  }
  return state;
};

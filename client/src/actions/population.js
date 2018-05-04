import { API_BASE_URL } from "../config";

export const SAVE_POPULATION = "SAVE_POPULATION";
export const savePopulation = population => ({
  type: SAVE_POPULATION,
  population
});

export const getPopulation = () => dispatch => {
  return fetch(`${API_BASE_URL}/population`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(population => dispatch(savePopulation(population)))
    .catch(err => {});
};

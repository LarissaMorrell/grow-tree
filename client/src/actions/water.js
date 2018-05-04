import { API_BASE_URL } from "../config";

export const SAVE_WATER = "SAVE_WATER";
export const saveWater = water => ({
  type: SAVE_WATER,
  water
});

export const getWater = () => dispatch => {
  return fetch(`${API_BASE_URL}/water`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(water => dispatch(saveWater(water)))
    .catch(err => {});
};

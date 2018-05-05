import { API_BASE_URL } from "../config";

export const WATER_PLANT = "WATER_PLANT";
export const waterPlant = water => ({
  type: WATER_PLANT,
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
    .then(water => dispatch(waterPlant(water)))
    .catch(err => {});
};

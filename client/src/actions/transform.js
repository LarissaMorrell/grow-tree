import { API_BASE_URL } from "../config";

export const TREE_TRANSFORM = "TREE_TRANSFORM";
export const treeTransform = greeting => ({
  type: TREE_TRANSFORM,
  greeting
});

export const treeTransformation = () => dispatch => {
  return fetch(`${API_BASE_URL}/api`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => dispatch(treeTransform(res.greeting)))
    .catch(err => {
      console.log(err);
    });
};

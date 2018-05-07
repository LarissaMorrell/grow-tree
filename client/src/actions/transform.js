import { API_BASE_URL } from "../config";

export const TREE_TRANSFORM = "TREE_TRANSFORM";
export const treeTransform = greeting => ({
  type: TREE_TRANSFORM,
  greeting
});

export const treeTransformation = () => dispatch => {
  console.log("treeTransform using ", API_BASE_URL);
  return fetch(`${API_BASE_URL}/api`, {
    method: "GET",
    headers: {
      "content-type": "application/json"
    }
  })
    .then(res => res.json())
    .then(g => console.log(g))
    .then(greeting => dispatch(treeTransform(greeting)))
    .catch(err => {
      console.log("The tree could not transform");
    });
};

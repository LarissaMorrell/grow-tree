import {
  WATER_PLANT,
  waterPlant,
  SUN_PLANT,
  sunPlant
} from "../actions/resources";
import { TREE_TRANSFORM, treeTransform } from "../actions/transform";

describe("waterPlant", () => {
  it("Should return the action", () => {
    const action = waterPlant();
    expect(action.type).toEqual(WATER_PLANT);
  });
});

describe("sunPlant", () => {
  it("Should return the action", () => {
    const action = sunPlant();
    expect(action.type).toEqual(SUN_PLANT);
  });
});

describe("treeTransform", () => {
  it("Should return the action", () => {
    const greeting = "Hello World!";
    const action = treeTransform(greeting);
    expect(action.type).toEqual(TREE_TRANSFORM);
    expect(action.greeting).toEqual(greeting);
  });
});

import React from "react";
import { shallow, mount } from "enzyme";
import { PlantGrowthContainer } from "../components/PlantGrowthContainer";

describe("<PlantGrowthContainer />", () => {
  it("renders without crashing", () => {
    shallow(<PlantGrowthContainer />);
  });
});

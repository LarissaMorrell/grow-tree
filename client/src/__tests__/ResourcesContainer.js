import React from "react";
import { shallow, mount } from "enzyme";
import { ResourcesContainer } from "../components/ResourcesContainer";

describe("<ResourcesContainer />", () => {
  it("renders without crashing", () => {
    shallow(<ResourcesContainer />);
  });
  it("should mount on DOM with 2 <Resource/>", function() {
    expect(mount(<ResourcesContainer />).find(".Resource").length).toBe(2);
  });
});

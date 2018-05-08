import React from "react";
import { shallow, mount } from "enzyme";
import Plant from "../components/Plant";

describe("<Plant />", () => {
  it("renders without crashing when there is no message", () => {
    shallow(<Plant treeMsg={undefined} />);
  });
  it("renders without crashing when there is a message", () => {
    shallow(<Plant treeMsg="Hi there" />);
  });
});

import React from "react";
import { shallow, mount } from "enzyme";
import App from "../components/App";

describe("<App />", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

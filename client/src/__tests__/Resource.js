import React from "react";
import { shallow, mount } from "enzyme";
import Resource from "../components/Resource";

describe("<Resource />", () => {
  it("renders without crashing", () => {
    shallow(<Resource resource="water" onClick={() => {}} />);
  });
  it("should fire input onClick", () => {
    let callback = jest.fn();
    let wrapper = mount(<Resource resource="water" onClick={callback} />);
    wrapper.find("input").simulate("click");
    expect(callback).toHaveBeenCalled();
  });
});

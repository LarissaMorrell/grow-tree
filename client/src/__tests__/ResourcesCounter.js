import React from "react";
import { shallow, mount } from "enzyme";
import {
  ResourcesCounter,
  mapStateToProps
} from "../components/ResourcesCounter";

describe("<ResourcesCounter />", () => {
  it("renders without crashing", () => {
    shallow(<ResourcesCounter treegrowth={() => {}} />);
  });

  it("should mount in a full DOM", function() {
    expect(
      mount(<ResourcesCounter treegrowth={() => {}} />).find(
        ".ResourcesCounter"
      ).length
    ).toBe(1);
  });
  // it("Should fire the treeGrowth callback when rendered", () => {
  //   const callback = jest.fn();
  //   const wrapper = mount(<ResourcesCounter treegrowth={callback} />);
  //   const value1 = 1;
  //   const value2 = 2;
  //   wrapper.instance().treegrowth(value1, value2);
  //   wrapper.update();
  //   expect(callback).toHaveBeenCalledWith(treegrowth(value1, value2));
  // });
  // it("Should render the add form when editing", () => {
  //   const wrapper = shallow(<ResourcesCounter />);
  //   wrapper.instance().setEditing(true);
  //   wrapper.update();
  //   expect(wrapper.hasClass("add-form")).toEqual(true);
  // });
});

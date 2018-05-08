import React from "react";
import { shallow, mount } from "enzyme";
import { ResourcesContainer } from "../components/ResourcesContainer";

describe("<ResourcesContainer />", () => {
  it("renders without crashing", () => {
    shallow(<ResourcesContainer />);
  });
  // it("should fire onClick", () => {
  //   let callback = jest.fn();
  //   let wrapper = mount(
  //     <ResourcesContainer resource="water" onClick={callback} />
  //   );
  //   wrapper.simulate("click");
  //   expect(callback).toHaveBeenCalled();
  // });
  //
  // it("should mount in a full DOM", function() {
  //   expect(
  //     mount(<ResourcesContainer resource="water" onClick={() => {}} />).find(".ResourcesContainer")
  //       .length
  //   ).toBe(1);
  // });

  // it('Should switch to editing when the add button is clicked', () => {
  //     const wrapper = shallow(<ResourcesContainer />);
  //     wrapper.simulate('click');
  //     expect(wrapper.state('editing')).toEqual(true);
  // });

  // it("should render without throwing an error", function() {
  //   expect(shallow(<ResourcesContainer />).contains(<input />)).toBe(true);
  // });
});

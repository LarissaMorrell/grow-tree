import React, { Component } from "react";
import { connect } from "react-redux";
import Resource from "./Resource";
import Water from "./Water";
import Sun from "./Sun";

import { sunPlant } from "../actions/resources";
import { waterPlant } from "../actions/resources";

export class ResourcesContainer extends Component {
  render() {
    return (
      <div className="ResourcesContainer">
        <Resource resource="sun" onClick={this.props.dispatch(sunPlant())} />
        <Sun />
        <Water />
      </div>
    );
  }
}
export default connect()(ResourcesContainer);

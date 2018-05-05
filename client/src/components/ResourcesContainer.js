import React, { Component } from "react";
import Water from "./Water";
import Sun from "./Sun";

export default class ResourcesContainer extends Component {
  render() {
    return (
      <div className="ResourcesContainer">
        <Sun />
        <Water />
      </div>
    );
  }
}

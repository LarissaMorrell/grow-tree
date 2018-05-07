import React, { Component } from "react";
import Resource from "./Resource";
import Water from "./Water";
import Sun from "./Sun";

export default class ResourcesContainer extends Component {
  render() {
    return (
      <div className="ResourcesContainer">
        <Resource resource="sun" />
        <Sun />
        <Water />
      </div>
    );
  }
}

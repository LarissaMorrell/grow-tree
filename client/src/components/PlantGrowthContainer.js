import React, { Component } from "react";
import Plant from "./Plant";
import ResourcesContainer from "./ResourcesContainer";

export default class PlantGrowthContainer extends Component {
  render() {
    return (
      <div className="PlantGrowthContainer">
        <Plant />
        <ResourcesContainer />
      </div>
    );
  }
}

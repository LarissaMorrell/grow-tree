import React, { Component } from "react";
import Plant from "./Plant";
import Water from "./Water";
import WaterShadow from "./WaterShadow";

export default class PlantGrowthContainer extends Component {
  render() {
    return (
      <div className="PlantGrowthContainer">
        <Plant />
        <div className="water-container">
          <Water />
          <WaterShadow />
        </div>
      </div>
    );
  }
}

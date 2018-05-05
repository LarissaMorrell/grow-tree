import React, { Component } from "react";
import Plant from "./Plant";
import Water from "./Water";
import WaterShadow from "./WaterShadow";

export default class PlantContainer extends Component {
  render() {
    return (
      <div className="PlantContainer">
        <Plant />
        <div className="water-container">
          <Water />
          <WaterShadow />
        </div>
      </div>
    );
  }
}

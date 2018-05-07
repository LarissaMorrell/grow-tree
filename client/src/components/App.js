import React, { Component } from "react";
import PlantGrowthContainer from "./PlantGrowthContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Water the plant</h1>
        </header>
        <PlantGrowthContainer />
      </div>
    );
  }
}

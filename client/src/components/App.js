import React, { Component } from "react";
import ResourcesCounter from "./ResourcesCounter";
import PlantGrowthContainer from "./PlantGrowthContainer";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Water the plant</h1>
        </header>
        <ResourcesCounter />
        <PlantGrowthContainer />
      </div>
    );
  }
}

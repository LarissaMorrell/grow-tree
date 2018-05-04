import React, { Component } from "react";
import Plant from "./Plant";
import Water from "./Water";
import WaterShadow from "./WaterShadow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Water the plant</h1>
        </header>
        <Plant />
        <div className="water-container">
          <Water />
          <WaterShadow />
        </div>
      </div>
    );
  }
}

export default App;

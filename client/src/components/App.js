import React, { Component } from "react";
import { connect } from "react-redux";
import { saveWater } from "../actions/water";
import Plant from "./Plant";
import Water from "./Water";
import WaterShadow from "./WaterShadow";

class App extends Component {
  render() {
    console.log(this.props);
    let color = this.props.water ? "clicked" : null;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Water the plant</h1>
        </header>
        <div
          className={`testing ${color}`}
          onClick={e => this.props.dispatch(saveWater(true))}
        />
        <Plant />
        <div className="water-container">
          <Water />
          <WaterShadow />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  water: state.water
});

export default connect(mapStateToProps)(App);

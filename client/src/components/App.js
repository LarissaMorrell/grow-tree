import React, { Component } from "react";
import { connect } from "react-redux";
import { saveWater } from "../actions/water";
import PlantContainer from "./PlantContainer";
import Water from "./Water";
import WaterShadow from "./WaterShadow";

class App extends Component {
  render() {
    let color = this.props.water ? "clicked" : "";
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Water the plant</h1>
        </header>
        <div
          className={`testing ${color}`}
          onClick={e => this.props.dispatch(saveWater(!this.props.water))}
        />
        <PlantContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  water: state.water
});

export default connect(mapStateToProps)(App);

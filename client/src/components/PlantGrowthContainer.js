import React, { Component } from "react";
import { connect } from "react-redux";
import ResourcesCounter from "./ResourcesCounter";
import Plant from "./Plant";
import ResourcesContainer from "./ResourcesContainer";
import { treeTransformation } from "../actions/transform";

export class PlantGrowthContainer extends Component {
  constructor(props) {
    super(props);
    this.treegrowth = this.treegrowth.bind(this);
  }
  treegrowth(water, sun) {
    if (water >= 3 && sun >= 3) {
      this.props.dispatch(treeTransformation());
    }
  }
  render() {
    return (
      <div className="PlantGrowthContainer">
        <Plant treeMsg={this.props.treeMsg} />
        <div>
          <ResourcesCounter treegrowth={this.treegrowth} />
          <ResourcesContainer />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  treeMsg: state.treeMsg
});

export default connect(mapStateToProps)(PlantGrowthContainer);

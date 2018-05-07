import React, { Component } from "react";
import { connect } from "react-redux";

export class ResourcesCounter extends Component {
  render() {
    return (
      <div className="ResourcesCounter">
        <div className="row">
          <img
            className="resource-icon"
            src="/media/water-droplet.png"
            alt="water"
          />
          <span>{` = ${this.props.water}`}</span>
        </div>
        <div className="row">
          <img className="resource-icon" src="/media/sun.png" alt="sun" />
          <span>{` = ${this.props.sun}`}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  water: state.water,
  sun: state.sun
});

export default connect(mapStateToProps)(ResourcesCounter);

import React, { Component } from "react";
import { connect } from "react-redux";
import { waterPlant } from "../actions/resources";

export class Water extends Component {
  render() {
    return (
      <div className="Water">
        <input
          type="image"
          alt="water"
          src="/media/water-droplet.png"
          onClick={e => this.props.dispatch(waterPlant())}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  water: state.water
});

export default connect(mapStateToProps)(Water);

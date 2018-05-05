import React, { Component } from "react";
import { connect } from "react-redux";
import { waterPlant } from "../actions/water";

export class Water extends Component {
  render() {
    console.log(this.props.water);
    return (
      <div className="Water">
        <img
          src="/media/water-droplet.png"
          alt="water"
          onClick={e => this.props.dispatch(waterPlant(this.props.water++))}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  water: state.water
});

export default connect(mapStateToProps)(Water);

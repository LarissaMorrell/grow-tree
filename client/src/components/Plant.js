import React, { Component } from "react";
import { connect } from "react-redux";

export class Plant extends Component {
  render() {
    return (
      <div className="Plant">
        <img src="/media/sapling.jpg" alt="sapling" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  water: state.water,
  sun: state.sun
});

export default connect(mapStateToProps)(Plant);

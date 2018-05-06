import React, { Component } from "react";
import { connect } from "react-redux";
import { sunPlant } from "../actions/resources";

export class Sun extends Component {
  render() {
    console.log("sun", this.props);
    return (
      <div className="Sun">
        <input
          type="image"
          alt="sun"
          src="/media/sun.png"
          onClick={e => this.props.dispatch(sunPlant())}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sun: state.sun
});

export default connect(mapStateToProps)(Sun);

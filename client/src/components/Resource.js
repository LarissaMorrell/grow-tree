import React, { Component } from "react";
import { connect } from "react-redux";
import { sunPlant } from "../actions/resources";
import { waterPlant } from "../actions/resources";

const resourceImg = {
  sun: "sun.png",
  water: "water-droplet.png"
};

export class Resource extends Component {
  render() {
    let resource = this.props.resource;
    let functName = this.props.resource + "Plant";
    console.log(window[functName]());
    return (
      <div className={resource}>
        <input
          type="image"
          alt={resource}
          src={`/media/${resourceImg[resource]}`}
          onClick={() => this.props.dispatch(window[functName]())}
        />
      </div>
    );
  }
}

export default connect()(Resource);

import React, { Component } from "react";
import { connect } from "react-redux";

const resourceImg = {
  sun: "sun.png",
  water: "water-droplet.png"
};

export class Resource extends Component {
  render() {
    let resource = this.props.resource;
    return (
      <div className={resource}>
        <input
          type="image"
          alt={resource}
          src={`/media/${resourceImg[resource]}`}
          onClick={() => this.props.onClick}
        />
      </div>
    );
  }
}

export default connect()(Resource);

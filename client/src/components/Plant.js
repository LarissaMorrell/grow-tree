import React, { Component } from "react";

export default class Plant extends Component {
  render() {
    return (
      <div className="Plant">
        <div>{this.props.treeMsg}</div>
        <img src="/media/sapling.jpg" alt="sapling" />
      </div>
    );
  }
}

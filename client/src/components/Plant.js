import React, { Component } from "react";

export default class Plant extends Component {
  tree(message) {
    return (
      <div className="Plant">
        <img className="tree" src="/media/tree.png" alt="tree" />
        <img
          className="speech-bubble"
          src="/media/speech-bubble.png"
          alt="speech bubble"
        />
        <h3>{message}</h3>
      </div>
    );
  }
  sapling() {
    return (
      <div className="Plant">
        <div>{this.props.treeMsg}</div>
        <img className="sapling" src="/media/sapling.jpg" alt="sapling" />
      </div>
    );
  }
  render() {
    let treeMsg = this.props.treeMsg;
    return treeMsg ? this.tree(treeMsg) : this.sapling();
  }
}

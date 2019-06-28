import React, { Component } from "react";
import chromeBoi from "./data.js";
import Cell from "./Cell.js";
import ColorSelector from "./ColorSelector.js";

export default class Matrix extends Component {
  constructor() {
    super();

    this.state = {
      color: "#FFF"
    };
  }

  setColor = (e, hexString) => {
    //hexString.persist();
    this.setState({ color: hexString });
    console.log(this.state.color);
  };

  currentColor = () => {
    return this.state.color;
  };

  genRow = vals => vals.map((val, idx) => <Cell key={idx} color={val} currentColor={this.currentColor} />);

  genMatrix = () =>
    this.props.values.map((rowVals, idx) => (
      <div key={idx} className="row">
        {this.genRow(rowVals)}
      </div>
    ));

  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColor} />
        <div id="matrix">{this.genMatrix()}</div>
      </div>
    );
  }
}

Matrix.defaultProps = {
  values: chromeBoi
};

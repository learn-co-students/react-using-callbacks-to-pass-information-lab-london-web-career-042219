import React, { Component } from "react";
import changeColor from "./Matrix.js";

export default class ColorSelector extends Component {
  newColor = event => {
    debugger;
  };

  makeColorSwatches = () =>
    [
      "#F00",
      "#F80",
      "#FF0",
      "#0F0",
      "#00F",
      "#508",
      "#90D",
      "#FFF",
      "#000"
    ].map((str, idx) => {
      return (
        <div
          key={idx}
          className="color-swatch"
          colorcode={str}
          style={{ backgroundColor: str }}
          onClick={this.newColor.bind(this, this.colorcode)}
        />
      );
    });

  render() {
    return <div id="colorSelector">{this.makeColorSwatches()}</div>;
  }
}

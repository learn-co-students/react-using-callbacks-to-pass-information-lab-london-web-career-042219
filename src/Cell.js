import React, { Component } from "react";

export default class Cell extends Component {
  state = { color: this.props.color };

  setCellColor = () => {
    const newColor = this.props.getColor();
    this.setState({ color: newColor });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.setCellColor}
      />
    );
  }
}

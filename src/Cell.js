import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  changeColorOnClick = () => {
    console.log("clciked!");
    console.log(this.props);
    this.setState({ color: this.props.currentColor() });
  };

  render() {
    return (
      <div
        onClick={this.changeColorOnClick}
        className="cell"
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}

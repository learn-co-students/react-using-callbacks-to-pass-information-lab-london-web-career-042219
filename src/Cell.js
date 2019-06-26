import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  
  setColor = (newColor)=> {
    this.setState({color:newColor});
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick = {(event) => this.props.changeColor(event, this.setColor )}>
      </div>
    )
  }
  
}

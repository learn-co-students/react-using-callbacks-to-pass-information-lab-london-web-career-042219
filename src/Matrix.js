import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor:'#fff'
    }
  }

  changeColor = (event, setColor ) => {
    console.log(event.target);
    setColor(this.state.selectedColor);
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} changeColor={ this.changeColor }/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  setSelectedColor= (event, setColor) => {
    console.log(setColor)
    this.setState( { selectedColor : setColor } )
  }

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={ this.setSelectedColor }/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}

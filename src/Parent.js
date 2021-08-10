import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: "#FFF"
    }
  }

  // Defining changeColor function using an arrow function is critical in making sure that 'this' variable refers to the Parent component instance when the instance method is invoked within the Child component class
  // If changeColor is defined as a regular function declaration, 'this' will not be binded to the Parent component instance's execution context and the function will attempt to 'work' on the Child component instance when it is invoked (causing errors)
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor.bind(this)}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor.bind(this)}/>
      </div>
    )
  }
}

export default Parent

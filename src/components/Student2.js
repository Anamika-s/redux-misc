import React, { Component } from 'react'

export default class Student2 extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {
             marks : 0
        }
    }
    Update =()=>
    {
        this.setState({marks: this.state.marks+ 10})
    }
  render() {
    return (
      <div> <b> Student 2 marks are {this.state.marks} </b>
      <button onClick={this.Update}> Ince Marks </button>
      </div>
    )
  }
}

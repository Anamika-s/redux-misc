import React, { Component } from 'react'
import HOC from './HOC'
class Student1 extends Component {
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
      <div> <b> Student 1 marks are {this.state.marks} </b>
              <br/> Your subject is {this.props.sub}  
      <button onClick={this.Update}> Ince Marks </button>
      </div>
    )
  }
}

export default HOC(Student1);



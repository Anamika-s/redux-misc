import React, { Component } from 'react'
import HOC from './HOC'
import { toHaveStyle } from '@testing-library/jest-dom/matchers'
class Vijay extends Component {
    constructor(props)
    {
        super(props)
        this.state = 
        {
            marks : 0
        }
    }
    Inc =()=>
    {
   this.setState({marks  : this.state.marks+10})
    }
  render() {
    return (
      <div>Vijay
        <h2 onMouseOver={this.Inc}> {this.state.marks} </h2>  

     Sub is    {this.props.sub}
      </div>
    )
  }
}

export default HOC(Vijay)
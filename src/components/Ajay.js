import React, { Component } from 'react'
import HOC from './HOC'
class Ajay extends Component {
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
      <div>Ajay
        <h2 onMouseOver={this.Inc}> {this.state.marks} 
        <br/> Your subject is {this.props.sub} </h2>  
      </div>
    )
  }
}

export default HOC(Ajay)
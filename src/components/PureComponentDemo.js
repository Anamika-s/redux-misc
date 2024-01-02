import { toHaveAccessibleDescription } from '@testing-library/jest-dom/matchers'
import React, { Component, PureComponent } from 'react'

export default class PureComponentDemo extends PureComponent {
 constructor(props)
 {
    super(props)
    this.state=
    {
         count:1
    }
 }
    render() {
    console.log(this.state.count)
    return (
      <div>PureComponentDemo
        {this.state.count}
        <button onClick={(()=> this.setState({count:10}))}> 
        Update Count</button>
      </div>
    )
  }
}

import React, { Component } from 'react'


const  HOC = (STUDENT)=>
{
       class Subject extends Component {
        render() {
          return (
            <div>
                <h1> Student </h1>
                 <STUDENT sub="eng"> </STUDENT></div>
          )
        }
      }
      return Subject;
      
}

export default HOC;

import React, { useState } from 'react'
import {Child} from './Child'
import ColorContext from '../ColorContext'

export const Parent = () => {
    const [color, setColor]= useState("green")
const [name, setName] = useState("Ajay")
const updateColor = ()=>
{
    // alert("Button clicked")
    setColor("red")
}
  return (
    <div>
        <ColorContext.Provider value={{appColor:color, appName:name, updateColor:updateColor}}>
        Parent
        <Child/>
        </ColorContext.Provider>
    </div>
  )
}

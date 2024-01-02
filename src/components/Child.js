import React from 'react'
import { useContext } from 'react'
import ColorContext from '../ColorContext'
import {GrandChild} from './GrandChild'
export const Child = () => {
    const {appColor}= useContext(ColorContext)
    console.log(appColor)
  return (
    <div>Child
<h1 style={{color:appColor}}> I am in child component </h1>
<GrandChild/>
    </div>
  )
}

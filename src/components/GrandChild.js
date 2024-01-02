import React, { useContext } from 'react'
import ColorContext from '../ColorContext'
export const GrandChild = () => {
    const {appColor,appName,updateColor} = useContext(ColorContext)
  return (
    <div>GrandChild
        <h1 style={{color:appColor}}> I am {appName} and I am in grand child component </h1>
   <button onClick={updateColor}> Update Color </button>
    </div>
  )
}

import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [num, setNum] = useState(10);
    const [count, setCount] = useState(100);

    //  const multiplyNum = ()=>
    //  {
    //     console.log(num * 5)
    //     return num*5;
    //  }

    const multiplyNum =  useMemo(()=>{
    {
       console.log(num * 5)
       return num*5;
    }},[count])
  return (
    <div>UseMemo
        <br/>
<h2> Num is {num} </h2>
<button onClick={(()=> setNum(num+10))}> Update Num </button>
   
<br/>
{/* {multiplyNum()} */}
{multiplyNum}
<h2> Count is {count} </h2>
<button onClick={(()=> setCount(count+10))}> Update Count </button>
    </div>
  )
}

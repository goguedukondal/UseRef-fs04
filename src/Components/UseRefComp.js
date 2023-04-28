import React from 'react'
import {useRef,useState} from 'react';
function UseRefComp() {
    const [value,setValue] = useState(0)
   const id = useRef(1);
  //  console.log(id.current)
   const start=()=>{
    id.current=setInterval(()=>{
      setValue((prev)=>prev+1)
    },1000)
   }
   const stop=()=>{
     clearInterval(id.current)
   }
   const reset=()=>{
      setValue(0)
   }
  return (
    <div>
        <h1>{value}</h1>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default UseRefComp
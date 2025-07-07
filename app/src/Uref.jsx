import { useRef, useState } from "react";
import React from 'react'

function Uref() {
    const [count,setcount]=useState(0);
    const intervalref=useRef(null);

    const startimer=() =>{
        if(!intervalref.current){
            intervalref.current=setInterval(()=>{
                setcount((prev)=>prev+1);
            },1000)
        }
    };

    const stoptimer=() =>{
        clearInterval(intervalref.current);
        intervalref.current=null;
    
    }
    
  return (
   <>
   <h1>Timer:{count}</h1>
   <button onClick={startimer}>start</button>
   <button onClick={stoptimer}>stop</button>

   </>
  )
}

export default Uref

import React, { useState,useEffect ,useRef} from 'react'

function Ref() {

    const[count,setcount]=useState(0);
    const  prevalue= useRef(null);

    useEffect(()=>{
        prevalue.current=count;

    });

  return (
    <div>
        <h1>current coun:{count}</h1>
        <h2>previuos:{prevalue.current}</h2>
        <button onClick={ ()=>setcount(count+1)}> increment</button>
      
    </div>
  )
}

export default Ref

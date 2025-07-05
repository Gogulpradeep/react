import React from 'react'
import Child from './Child'

function ParentCompound() {
   

    function handleClick(message){
      alert(`button clicked:${message}`);

    }
  return (
    <>
    <h1>passing fuction to pros</h1>
   <Child data={handleClick}/>
    </>
  )
}

export default ParentCompound

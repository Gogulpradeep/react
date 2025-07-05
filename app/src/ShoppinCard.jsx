import React from 'react'

function ShoppinCard({items}) {
  return (
<>
{items.length> 0 ? (
    <>
    <h1>your Shopping Card:</h1>
    <ul>
        {items.map((items,index)=>(
            <li key={index}>{items}</li>

        ))}
    </ul>
    </>
) 
: (


    <h1>Your cart is empty!</h1>
)}
</>
  );
}

export default ShoppinCard

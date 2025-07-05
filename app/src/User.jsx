import React from 'react'

function User( props) {
  return (
   <>

   <h1>{props.name}</h1>
   <p>{ props.ph}</p>
   <p>{props.email}</p>
   </>
  )
}

export default User

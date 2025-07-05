import React from 'react'

function User({name,email,ph}) {
  return (
   <>

   <h1>{name}</h1>
   <p>{ph}</p>
   <p>{email}</p>
   </>
  )
}

export default User

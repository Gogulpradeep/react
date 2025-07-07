import React from 'react'
import User from './User';

function Props() {
  const detials ={
        name:"gogul",
        ph:9597293936,
        email:"mgogulpradeep@gmail.com",

    };

  return (
<User {...detials}  />
  )
}

export default Props    

import React from 'react'
import User from './User';

function part() {

    const detials ={
        name:"gogul",
        ph:9597293936,
        email:"mgogulpradeep@gmail.com"

    };

  return (
<User  name= {detials.name }  ph={detials.ph}   email={detials.email}/>
  )
}

export default part

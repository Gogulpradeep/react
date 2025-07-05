import React from 'react'
import ShoppinCard from './ShoppinCard';

function Card() {
     const cardItems=['apple','bananna','cherry'];

  return (
    <ShoppinCard items={cardItems}/>
  )
}

export default Card

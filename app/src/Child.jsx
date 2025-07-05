import React from 'react'
import PropTypes from 'prop-types';
import ParentCompound from './ParentCompound';


function Child({data}) {
  return (
<button on onClick={()=> data("hello from the button")}>
  CLICK ME
</button>
   
  );
}



export default Child

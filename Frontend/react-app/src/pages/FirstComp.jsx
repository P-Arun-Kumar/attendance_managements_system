import React from 'react'
import SecondComp from './SecondComp'

function FirstComp() {
    const info ="message to 3rd comp from 1st comp"
  return (
    <div>
       <SecondComp info={info}/>
    </div>
  )
}

export default FirstComp
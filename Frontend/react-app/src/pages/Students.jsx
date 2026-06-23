import React from 'react'
import { useContext } from "react";
import UserContext from '../components/UserContext';

function Students() {
    const user=useContext(UserContext)
    console.log(user)
  return (
    <div>
        <h1>{user}</h1>
    </div>
  )
}

export default Students
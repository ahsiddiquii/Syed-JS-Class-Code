import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const param = useParams();
    const {id} = param;
  return (
    <div>Hello {id}</div>
  )
}

export default User
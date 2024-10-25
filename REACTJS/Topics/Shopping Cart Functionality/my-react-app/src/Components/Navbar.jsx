import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const reduxSelector = useSelector(state => state.CartItems)
  return (
    <>
      <div>
        <h2>Logo</h2>
        <Link to='/cart'><h3>Cart Items: {reduxSelector.length}</h3></Link>
      </div>
    </>
  )
}

export default Navbar
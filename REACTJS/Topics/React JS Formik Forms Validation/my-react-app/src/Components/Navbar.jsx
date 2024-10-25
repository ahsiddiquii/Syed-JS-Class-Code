import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <h2 ><Link to='/' >Basic Form</Link> </h2>
      <h2 > <Link to='/advanceform' >Advance Form</Link></h2>
    </>
  )
}

export default Navbar
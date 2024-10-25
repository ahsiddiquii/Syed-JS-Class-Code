import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <ul>
        <Link to='/' ><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/products'><li>Products</li></Link>
        <Link to='/filter'><li>Filter</li></Link>
        <Link to='/user/2'><li>User</li></Link>
        <Link to='/login'><li>Login</li></Link>
        
        
        
    </ul>
  )
}

export default Navbar
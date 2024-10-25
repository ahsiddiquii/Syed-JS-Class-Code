import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);
  useEffect(() => {
    let auth = localStorage.getItem('login');
    setLogin(auth);
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('login')
    navigate('/login');
  }


  return (
    <>
      <h1>Home</h1>
      {login ? <button onClick={handleLogout} >Logout</button> : ""}
    </>
  )
}

export default Home
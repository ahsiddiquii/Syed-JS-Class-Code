import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const login = localStorage.getItem('login');
        if (login) {
            navigate('/');
        }else{
            navigate('/login')
        }
    }, [])
    const loginHandle = () => {
        localStorage.setItem('login', true);
        navigate('/');
    }
    return (
        <>
            <input type="text" placeholder='Login' />
            <button onClick={loginHandle}>Login</button>
        </>
    )
}

export default Login
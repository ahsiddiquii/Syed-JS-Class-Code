import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
    return (
        <>
            <div>About</div>
            <ul>
                <li> <Link to='peter'>About Peter's</Link></li>
                <li> <Link to='adams'>About Adam's</Link></li>
            </ul>
            <Outlet/>

        </>
    )
}

export default About
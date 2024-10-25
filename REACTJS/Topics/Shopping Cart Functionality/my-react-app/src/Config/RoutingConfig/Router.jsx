import React from 'react'
import Home from '../../Screens/Home'
import Cart from '../../Screens/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default Router
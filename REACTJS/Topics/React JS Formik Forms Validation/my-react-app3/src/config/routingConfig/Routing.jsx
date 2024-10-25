import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormikForm from '../../screens/FormikForm'

const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<FormikForm />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Routing;
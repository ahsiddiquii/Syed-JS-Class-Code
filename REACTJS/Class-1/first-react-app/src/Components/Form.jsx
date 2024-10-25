import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (event) => {
        console.log(event.target.value); // qwer
        console.log(event.target.name); // password
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
                // email: @34
                // name: abc
                // password: qwer
            }
        );

        
    };
    console.log(formData);

    return (
        <>
            <div>
                <form>
                    <input
                        type="text"
                        placeholder='Enter your Full Name'
                        value={formData.name}
                        onChange={handleInputChange}
                        name='name' /> <br />

                    <input
                        type="text"
                        placeholder='Enter your Email'
                        value={formData.email}
                        onChange={handleInputChange}
                        name='email' /> <br />

                    <input
                        type="text"
                        placeholder='Enter your Password'
                        value={formData.password}
                        onChange={handleInputChange}
                        name='password' /> <br />

                    <input
                        type="text"
                        placeholder='Enter your Confirm password'
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        name='confirmPassword' />

                </form>
                <pre>{JSON.stringify(formData, null, 2)}</pre>
            </div>
        </>
    )
}

export default Form
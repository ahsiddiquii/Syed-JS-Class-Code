import React from 'react'
import Navbar from '../Components/Navbar';
import { useFormik } from 'formik';
import {basicFormSchema} from '../FormSchema/formSchema';
import { useField } from 'formik'


const BasicForm = () => {

  const handleFormSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
      console.log(values);
    }, 1000);
  }

  const { values, errors, touched, isSubmitting ,handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullName: '',
      age: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: basicFormSchema,
    onSubmit: handleFormSubmit,
  });

  console.log(errors)

  return (
    <>
      <Navbar />
      <h2>Basic Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">
          Full Name
        </label>
        <input type="text" id='fullName' placeholder='Enter your full name' value={values.fullName} onChange={handleChange} onBlur={handleBlur} />
        <br />
        {errors.fullName && touched.fullName ? <span style={{ color: "red" }}>{errors.fullName}</span> : ""}
        <br />
        <label htmlFor="age">
          Age
        </label>
        <input type="number" id='age' placeholder='Enter you age' value={values.age} onChange={handleChange} onBlur={handleBlur} />
        <br />
        {errors.age && touched.age ? <span style={{ color: "red" }}>{errors.age}</span> : ""}
        <br />
        <label htmlFor="email">
          Email
        </label>
        <input type="email" id='email' placeholder='Enter your email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
        <br />
        {errors.email && touched.email ? <span style={{ color: "red" }}>{errors.email}</span> : ""}
        <br />
        <label htmlFor="password">
          Password
        </label>
        <input type="password" id='password' placeholder='Enter your password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
        <br />
        {errors.password && touched.password ? <span style={{ color: "red" }}>{errors.password}</span> : ""}
        <br />
        <label htmlFor="confirmPassword"> Confirm Passowrd</label>
        <input id='confirmPassword' type="password" placeholder='Confirm Pasword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
        <br />
        {errors.confirmPassword && touched.confirmPassword ? <span style={{ color: "red" }}>{errors.confirmPassword}</span> : ""}
        <br />
        <button disabled={isSubmitting} type='submit'>Register</button>
      </form>
    </>
  )
}

export default BasicForm;
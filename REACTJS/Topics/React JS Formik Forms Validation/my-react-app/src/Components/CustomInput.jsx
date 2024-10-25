import { useField } from 'formik';
import React from 'react'

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? <span>{meta.error}</span> : ""}
    </>
  )
}

export default CustomInput;
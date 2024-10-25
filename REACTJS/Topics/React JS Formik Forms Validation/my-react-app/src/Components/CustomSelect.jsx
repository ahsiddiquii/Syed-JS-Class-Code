import { useField } from 'formik';
import React from 'react'

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label> {label} </label>
      <select {...props} {...field} />
      {meta.touched && meta.error ? <span>{meta.error}</span> : ""}
    </>
  )
}

export default CustomSelect;
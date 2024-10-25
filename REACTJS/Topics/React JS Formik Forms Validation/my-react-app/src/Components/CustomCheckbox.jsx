import { useField } from 'formik'
import React from 'react'

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  console.log(field);
  return (
    <>
      <div >
        <input
          {...field}
          {...props}
        />
        <span>I accept the terms of service</span>
      </div>

      {meta.touched && meta.error && <div >{meta.error}</div>}
    </>
  )
}

export default CustomCheckbox
import React from 'react'
import Navbar from '../Components/Navbar';
import { Form, Formik } from 'formik';
import CustomInput from '../Components/CustomInput';
import CustomSelect from '../Components/CustomSelect';
import CustomCheckbox from '../Components/CustomCheckbox';
import { AdvanceFormSchema } from '../FormSchema/formSchema';

const AdvanceForm = () => {
  const onSubmit = (values, actions) => {
    setTimeout(() => {
      actions.resetForm();
      console.log(values);
    }, 1000);
  }
  return (
    <>
      <Navbar />
      <h2>Advance Form</h2>
      <Formik initialValues={{ userName: "", jobType: "", checkBox: false }} validationSchema={AdvanceFormSchema} onSubmit={onSubmit}>
        {({ isSubmitting }) => {
          <Form>
            <CustomInput
              label="Username"
              name="userName"
              type="text"
              placeholder="Username"
            />
            <CustomSelect label='Job Type'
            name= 'jobType'
            placeholder="Please select a job"
            >
              <option value="">Please select a job type</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Product Manager</option>
              <option value="other">Other</option>
            </CustomSelect>
            <CustomCheckbox type="checkbox" name="checkBox" />
            <button disabled={isSubmitting} type='submit' >Submit</button>
          </Form>
        }}

      </Formik>
    </>
  )
}

export default AdvanceForm;
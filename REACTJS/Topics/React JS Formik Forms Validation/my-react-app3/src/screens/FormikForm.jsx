import { Form, Formik } from 'formik';
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';
import CustomCheckbox from '../components/CustomCheckbox';
import {formSchema} from '../schema/index';

const FormikForm =  () => {
    const formSubmitHandler = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();

    }
    return (
        <>
            <Formik
                initialValues={{
                    fullName: "",
                    age: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    shift: "",
                    checkBox: false
                }}
                validationSchema={formSchema}
                onSubmit={formSubmitHandler}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <CustomInput label='Full Name' name='fullName' type='text' placeholder='Enter your Full Name' />
                        <CustomInput label='Age' name='age' type='number' placeholder='Enter your age' />
                        <CustomInput label='Email' name='email' type='email' placeholder='Enter your Email Address' />
                        <CustomInput label='Password' name='password' type='password' placeholder='Enter your Password' />
                        <CustomInput label='Confirm Password' name='confirmPassword' type='password' placeholder='ReEnter your Password' />
                        <CustomSelect type='select' name='shift' label='Shift' placeholder='Please select any shift' >
                            <option value="">Please Select Your Shift</option>
                            <option value="earlyMorning">Early Morning</option>
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="night">Night</option>
                        </CustomSelect>
                        <CustomCheckbox type='checkbox' name='checkBox' />
                        <button type='submit' disabled={isSubmitting} >Submit</button>
                    </Form>
               )}

            </Formik>
        </>
    )
}

export default FormikForm;
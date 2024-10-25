import * as yup from 'yup';

const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicFormSchema = yup.object().shape({
    fullName: yup.string().required('Required'),
    age: yup.number().positive().integer().required('Required'),
    email: yup.string().email("Enter a valid Email").required('Required'),
    password: yup.string().min(5).matches(PWD_REGEX, { message: "min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" }).required('Required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], "Doestn't Match").required('Required')
});
export const AdvanceFormSchema = yup.object().shape({
    userName: yup.string().min(4).required('Required'),
    jobType: yup.string().oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type").required('Required'),
    checkBox: yup.boolean().oneOf([true]).required('Required'),
});


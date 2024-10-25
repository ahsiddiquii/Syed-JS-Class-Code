import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const formSchema = yup.object().shape({
    fullName: yup.string().required("Required"),
    age: yup.number().positive().integer().required("Required"),
    email: yup.string().email("Invalid Email Address").required("Required"),
    password: yup.string().min(5).matches(passwordRules).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password Doesn't Match").required("Required"),
    shift: yup.string().oneOf(["earlyMorning", "morning", "afternoon", "night"]).required("Required"),
    checkBox: yup.boolean().oneOf([true], "Please accept the terms of service")
});


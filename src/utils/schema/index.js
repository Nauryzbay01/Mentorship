import * as yup from "yup";

export const schemaForMentee = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я-]+$/, "Must contain only letters")
    .required(),
  lastname: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я-]+$/, "Must contain only letters")
    .required(),
  email: yup.string().email().required(),
  number: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be more than 4 digits")
    .max(15, "Must be less than 16 digits"),
  iin: yup.number().positive("Must enter valid IIN").required(),
  grade: yup.number().positive("Must enter valid grade").required(),
  achievements: yup.string().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_-])[A-Za-z\d@$!%*#?&_-]{8,30}$/,
      "Should contain capital letter and at least 1 number and 1 spec symbol"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords should match")
    .required(),
});

export const schemaForMentor = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я-]+$/, "Must contain only letters")
    .required(),
  lastname: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я-]+$/, "Must contain only letters")
    .required(),
  email: yup.string().email().required(),
  number: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be more than 4 digits")
    .max(15, "Must be less than 16 digits"),
  iin: yup.string().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_-])[A-Za-z\d@$!%*#?&_-]{8,30}$/,
      "Should contain capital letter and at least 1 number and 1 spec symbol"
    )
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords should match")
    .required(),
  age: yup.number().positive("Must enter valid Age").required(),
  university: yup.string().required(),
  work: yup.string(),
  userInfo: yup.string().required(),
});

export const schemaForEditingMentorProfile = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я-]+$/, "Must contain only letters"),
  lastname: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я-]+$/, "Must contain only letters"),
  email: yup.string().email(),
  number: yup
    .string()

    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be more than 4 digits")
    .max(15, "Must be less than 16 digits")
    .required(),
  iin: yup.string(),
  age: yup.number().positive("Must enter valid Age"),
  university: yup.string(),
  work: yup.string(),
  userInfo: yup.string(),
});

export const schemaForEditingMenteeProfile = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я-]+$/, "Must contain only letters"),
  lastname: yup
    .string()
    .matches(/^[A-Za-zА-Яа-я-]+$/, "Must contain only letters"),
  email: yup.string().email(),
  number: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(4, "Must be more than 4 digits")
    .max(15, "Must be less than 16 digits"),
  iin: yup.string(),
  grade: yup.number().positive("Must enter valid grade"),
  achievements: yup.string(),
});

import * as Yup  from 'yup'
export const SignUpValidationSchema =Yup.object({
    name: Yup.string().min(3, "Must be 3 characters or more")
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(4, "must be 4 number or more")
      .required('Required'),
      
  })
// export const LoginValidationSchema =Yup.object({
//     name: Yup.string().min(3, "Must be 3 characters or more")
//       .max(20, 'Must be 20 characters or less')
//       .required('Required'),
//     email: Yup.string().email('Invalid email address').required('Required'),
//     password: Yup.string().min(4, "must be 4 number or more")
//       .required('Required'),
//   })
import { Link } from "react-router-dom"
import { useFormik } from 'formik'
import { SignUpValidationSchema } from "../utils/ValidationSchema";
import axios from 'axios'

export const Signup = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: async values => {
      try {
        const response = await axios.post("http://localhost:9090/signup", values);
        console.log('User created:', response.data);
        // Handle success, e.g., redirect or show a success message
      } catch (error) {
        console.error('Error creating user:', error);
        // Handle error, e.g., show an error message
      }
      console.log(values)
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='max-w-full bg-custom-gradient-form h-[516px] flex items-center justify-center'>
          <div className="bg-white h-80 rounded-md">
            <div className="pt-8 ps-5 pe-5">
              <h1 className="font-bold text-center text-2xl">SignUp</h1>
              <div className="pt-3"><input className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none rounded-md" type="text" placeholder="Enter Your Name" name="name"  {...formik.getFieldProps('name')} />
                {formik.touched && formik.errors ? <div className="text-red-400 text-xs">{formik.errors.name}</div> : null}</div>
              <div className="pt-3"><input className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none rounded-md" type="email" placeholder="Email address" name="email" {...formik.getFieldProps('email')} />
                {formik.touched && formik.errors ? <div className="text-red-400 text-xs">{formik.errors.email}</div> : null}
              </div>
              <div className="pt-5"><input className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none rounded-md" type="password" placeholder="Password" name="password" {...formik.getFieldProps('password')} />
                {formik.touched && formik.errors ? <div className="text-red-400 text-xs">{formik.errors.password}</div> : null}</div>
              <div className="pt-5 "><button type="submit" className=" bg-red-500 pt-1 ps-36 pe-32 rounded-lg  text-white font-normal" >Continue</button></div>
              <div className="pt-2">
                <span className="text-sm">Already have an account?</span>
                <Link to={"/login"}><button className="text-red-900 text-sm ps-1" >Click here</button></Link>
              </div>
              <div className="pt-1">
                <input type="checkbox" className="text-sm" />
                <span className=" text-sm ps-2">By Continuing  i agree to the terms & privacy policy</span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

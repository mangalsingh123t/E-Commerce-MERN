import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
export const Login = () => {
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const changeHandler = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    })
  }

  const submitHandler = async () => {
    try {
      const response = await axios.post("http://localhost:9090/signin", userData)
      console.log(response.data)
      if (response.data.success) {
        localStorage.setItem("auth-token", response.data.token)
        // When to Use { replace: true }:
        // Prevent Back Navigation: If you redirect the user to another page (e.g., home after login) and 
        // don’t want them to navigate back to the login page using the back button, you use { replace: true }.
        // navigate("/", { replace: true });
        navigate("/")
      }
      else {
        alert(response.data.error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='max-w-full bg-custom-gradient-form h-[516px] flex items-center justify-center'>
        <div className="bg-white h-80 rounded-md">
          <div className="pt-8 ps-5 pe-5">
            <h1 className="font-bold text-center text-2xl">Login</h1>
            <div className="pt-3"><input className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none rounded-md" type="email" name="email" value={userData.email} placeholder="Email" onChange={changeHandler} /></div>
            <div className="pt-5"><input className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none rounded-md" type="password" name="password" value={userData.password} placeholder="Password" onChange={changeHandler} /></div>
            <div className="pt-5 "><button className=" bg-red-500 pt-1 ps-36 pe-32 rounded-lg  text-white font-normal" onClick={submitHandler}>Continue</button></div>
            <div className="pt-2">
              <span className="text-sm" >Create an account?</span>
              <Link to={"/signup"}><button className="text-red-900 text-sm ps-1" >Click here</button></Link>
            </div>
            <div className="pt-1">
              <input type="checkbox" className="text-sm" />
              <span className=" text-sm ps-2">By Continuing  i agree to the terms & privacy policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

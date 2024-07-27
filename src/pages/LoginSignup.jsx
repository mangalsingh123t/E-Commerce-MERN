
export const LoginSignup = () => {
  return (
    <>
      <div className='max-w-full bg-custom-gradient-form h-[516px] flex items-center justify-center'>
        <div className="bg-white h-80 rounded-md">
          <div className="pt-8 ps-5 pe-5">
            <h1 className="font-bold  text-lg">Login</h1>
            <div className="pt-3"><input className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none" type="email" placeholder="Email address"/></div>
            <div className="pt-5"><input className="font-serif pe-40 ps-1 pt-1 pb-1 border border-gray-300 outline-none" type="password" placeholder="Password"/></div>
            <div className="pt-5 "><button className=" bg-red-500 pt-1 ps-36 pe-32 rounded-lg  text-white font-normal">Continue</button></div>
            <div className="pt-2">
              <span className="text-sm">Create an account?</span>
              <button className="text-red-900 text-sm ps-1">Click here</button>
            </div>
            <div className="pt-1">
              <input type="checkbox"  className="text-sm"/>
              <span  className=" text-sm ps-2">By Continuing  i agree to the terms & privacy policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

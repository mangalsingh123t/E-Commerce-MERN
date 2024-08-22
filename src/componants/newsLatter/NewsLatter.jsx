  
  export const NewsLatter = () => {
    return (
      <>
      <div className="container mx-auto bg-custom-gradient grid place-content-center h-80 rounded-md">
        <div className="font-semibold lg-text-5xl sm:text-3xl text-2xl">Get Exclussive Offers On Your Email</div>
        <p className="text-center mt-3">Subscribe to our news latter and stay updated</p>
         <div className="mt-5 flex place-content-center">
            <input className="py-3 ps-3 sm:pe-32 outline-none border border-gray-100 rounded-xl bg-white text-sm" type="email" placeholder="your email id"/>
            <button className="bg-black text-white rounded-2xl px-3 sm:px-4 ms-[-15px]">Subscribe</button>
         </div>
      </div>
      </>
    )
  }
  
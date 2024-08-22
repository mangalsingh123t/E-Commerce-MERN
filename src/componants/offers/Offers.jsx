
import exclusive_image from '../assets/exclusive_image.png'
export const Offers = () => {
  return (
    <>
      <div className="container mx-auto  grid md:grid-cols-2 grid-cols-1 bg-custom-gradient items-center justify-items-center rounded-md md:mt-7 mt-3">
        <div>
          <div className='font-bold text-3xl md:text-4xl lg:text-6xl md:mt-0 mt-4'>Exclusive</div>
          <div className='font-bold text-3xl md:text-4xl lg:text-6xl md:mt-3 mt-2'>Offers For You</div>
          <p className='md:mt-3 mt-2 text-sm '>ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="bg-red-500 py-2 px-7 rounded-2xl mt-4 text-white ">Check now</button>
        </div>
        <div>
          <img  className='w-full md:block hidden' src={exclusive_image} alt="offer_image" />
        </div>
      </div>
    </>
  )
}

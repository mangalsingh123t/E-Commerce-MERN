
import hero from '../assets/hero_image.png';
import handIcon from '../assets/hand_icon.png';
import arrow from '../assets/arrow.png'

export const Hero = () => {
  return (
    <>
      <div className="grid grid-cols-1  md:grid-cols-2 justify-items-center items-center bg-custom-gradient">
        <div>
          <p className='font-semibold '>New ARRIVALS ONLY</p>
          <p className='text-6xl font-semibold'>new
            <img className='max-w-14 inline' src={handIcon} alt="handicon" />
            <br />
            collections <br />for everyone</p>
            <div className='bg-red-500 flex w-48 gap-1 rounded-3xl items-center mt-8'>
            <button className='text-white p-2 ps-4'>Latest Collection</button>
            <img  className='h-3 pe-2' src={arrow} alt="arraw_icon" />
            </div>
        </div>
        <div>
          <img className='max-w-[390px]'  src={hero} alt="hero_image" />
        </div>
      </div>
    </>
  )
}

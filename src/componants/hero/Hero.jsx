/* eslint-disable react/prop-types */
import hero from '../assets/hero_image.png';
import handIcon from '../assets/hand_icon.png';
import arrow from '../assets/arrow.png';

export const Hero = ({ scrollToNewCollection }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center bg-custom-gradient">
        <div>
          <p className='font-semibold md:pt-0 pt-5'>New ARRIVALS ONLY</p>
          <p className='sm:text-6xl text-4xl font-semibold'>
            new
            <img className='max-w-14 inline' src={handIcon} alt="handicon" />
            <br />
            collections <br />for everyone
          </p>
          <div className='bg-red-500 flex w-48 gap-1 rounded-3xl items-center mt-8 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out'>
            <button 
              className='text-white p-2 ps-4 rounded-3xl transition-colors duration-200 ease-in-out hover:bg-red-600'
              onClick={scrollToNewCollection}
            >
              Latest Collection
            </button>
            <img className='h-3 pe-2' src={arrow} alt="arrow_icon" />
          </div>
        </div>
        <div>
          <img className='min-w-full md:w-96' src={hero} alt="hero_image" />
        </div>
      </div>
    </>
  );
};

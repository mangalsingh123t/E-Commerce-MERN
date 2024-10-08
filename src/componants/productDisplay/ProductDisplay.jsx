/* eslint-disable react/prop-types */
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import {useNavigate} from 'react-router-dom'

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const navigate=useNavigate()
    const [loading, setLoading] = useState(false); // Loading state

   const addProductToCart = (id) =>{
   const token = localStorage.getItem('auth-token')
   if (token) {
    setLoading(true); // Set loading state to true
    addToCart(id)
     // Simulate a delay for the loading effect
     setTimeout(() => {
        setLoading(false); // Reset loading state after the operation
        navigate("/cart")
    }, 1000); // Adjust time as needed
   }
   else{
  navigate("/login")
   }
    }

    return (
        <>
            <div className="grid grid-cols-12 mt-5 gap-4">
                <div className='col-span-12 sm:col-span-2 md:col-span-1'>
                    {/* Thumbnail images */}
                    {[...Array(4)].map((_, index) => (
                        <img
                            key={index}
                            className="w-20 hidden sm:block mb-2"
                            src={product?.image}
                            alt="product_image"
                        />
                    ))}
                </div>
                <div className='col-span-12 sm:col-span-10 md:col-span-4'>
                    <img src={product?.image} alt="product_image" />
                </div>
                <div className='col-span-12 md:col-span-7'>
                    <h1 className="text-2xl font-bold ">{product?.name}</h1>
                    <div className='flex mt-3'>
                        {/* Star ratings */}
                        <img src={star_icon} alt="star_icon" />
                        <img src={star_icon} alt="star_icon" />
                        <img src={star_icon} alt="star_icon" />
                        <img src={star_icon} alt="star_icon" />
                        <img src={star_dull_icon} alt="star_icon" />
                        <div>(122)</div>
                    </div>
                    <div className='mt-3'>
                        <span className='pe-2 '>${product?.new_price}</span>
                        <span className='line-through text-slate-400'>${product?.old_price}</span>
                    </div>
                    <p className='mt-3'>Voluptas mollitia aperiam quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repudiandae necessitatibus explicabo dolorum laboriosam laudantium earum possimus quasi aut maxime exercitationem unde consequuntur eveniet in fuga ea blanditiis quibusdam enim.</p>
                    {/* <div className='mt-3'>
                        <div>Select Size</div>
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <button
                                key={size}
                                className='text-black py-1 px-3 bg-gray-100 me-1 rounded-md hover:bg-gray-200 transition-colors duration-150 ease-in-out'
                            >
                                {size}
                            </button>
                        ))}
                    </div> */}
                    {/* Add to Cart button */}
                    <button
                        className={`bg-red-500 text-white px-4 py-2 mt-3 rounded-md font-semibold shadow-md hover:bg-red-600 transition-colors duration-200 ease-in-out hover:shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={() => addProductToCart(product.id)}
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z"></path>
                                </svg>
                                Going to Cart
                            </span>
                        ) : (
                            'ADD TO CART'
                        )}
                    </button>
                    <div className='mt-3'>
                        <span className='font-semibold text-sm '>Category:</span>
                        <span className='text-sm'>{product?.category}</span>
                    </div>
                    <div>
                        <span className='font-semibold text-sm'>Tags:</span>
                        <span className='text-sm'>Modern Latest</span>
                    </div>
                </div>
            </div>
        </>
    );
};

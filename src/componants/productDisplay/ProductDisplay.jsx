/* eslint-disable react/prop-types */
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'

export const ProductDisplay = (props) => {
    const { product } = props
    return (
        <>
            <div className="grid grid-cols-12">
                <div className='col-span-1'>
                    <img className="max-w-20 mb-2" src={product.image} alt="product_image" />
                    <img className="max-w-20 mb-2" src={product.image} alt="product_image" />
                    <img className="max-w-20 mb-2" src={product.image} alt="product_image" />
                    <img className="max-w-20 mb-2" src={product.image} alt="product_image" />
                </div>
                <div className='col-span-4'>
                    <img src={product.image} alt="product_image" />
                </div>
                <div className='col-span-5'>
                  <h1 className="text-2xl font-bold">{product.name}</h1>
                  <div className='flex'>
                    <img src={star_icon} alt="start_icon" />
                    <img src={star_icon} alt="start_icon" />
                    <img src={star_icon} alt="start_icon" />
                    <img src={star_icon} alt="start_icon" />
                    <img  src={star_dull_icon} alt="start_icon" />
                    <div>(122)</div>
                  </div>
                  <div>
                    <span className='pe-2'>${product.new_price}</span>
                    <span>${product.old_price}</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas mollitia aperiam quaerat.</p>
                  <div>
                   <div>Select Size</div>  
                    <button className='text-black py-1 px-3 bg-gray-100 me-1'>S</button>
                    <button className='text-black py-1 px-3 bg-gray-100 me-1'>M</button>
                    <button className='text-black py-1 px-3 bg-gray-100 me-1'>L</button>
                    <button className='text-black py-1 px-3 bg-gray-100 me-1'>XL</button>
                    <button className='text-black py-1 px-3 bg-gray-100 me-1'>XXL</button>
                  </div>
                  <button className='bg-red-500 px-3 py-2'>ADD TO CART</button>
                  <div><span className='font-semibold text-sm'>Category:</span><span className='text-sm'>{product.category}</span></div>
                  <div><span className='font-semibold text-sm'>Tags:</span><span className='text-sm'>Modern Latest</span></div>
                </div>
            </div>
        </>
    )
}

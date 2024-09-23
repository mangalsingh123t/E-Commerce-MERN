/* eslint-disable react/prop-types */
import { Item } from '../componants/items/Item'
import mens_banner from '../componants/assets/banner_mens.png'
import womens_banner from '../componants/assets/banner_women.png'
import kids_banner from '../componants/assets/banner_kids.png'
import breadcrum_arrow from '../componants/assets/breadcrum_arrow.png'
import { useContext } from 'react'
import { ShopContext } from '../componants/context/ShopContext'

export const ShopCategory = (props) => {
  // const {allProducts} = useContext(ShopContext)
  const { allProducts } = useContext(ShopContext)
  return (
    <>
      <div>
        <div className='container mx-auto mt-3'>
          {props.category === "men" ? (
            <img src={mens_banner} alt="Men's Banner" />
          ) : props.category === "women" ? (
            <img src={womens_banner} alt="Women's Banner" />
          ) : props.category === "kid" ? (
            <img src={kids_banner} alt="Kids' Banner" />
          ) : (
            ""
          )}
        </div>
        <div className='container mx-auto flex justify-between mt-4'>
          <div> <span className='font-bold'>Showing 1-12</span> out of 36 products </div>
          <div className='py-1 px-3 border border-gray-100 rounded-xl'>
            <button  >sort by </button><img className='inline ' src={breadcrum_arrow} alt="sorting image" />
          </div>
        </div>
        <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-4  gap-5 rounded-md  mt-3 pb-9  place-content-center" >
          {
            allProducts.products?.map((item, index) => {
              return item.category == props.category ? <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> : ""
            })
          }
        </div>

        <div className='text-center'>
          <button className='bg-slate-100 text-black rounded-xl p-1 px-5'>Explore More</button>
        </div>
      </div>
    </>
  )
}

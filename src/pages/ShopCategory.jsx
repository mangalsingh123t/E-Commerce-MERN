/* eslint-disable react/prop-types */
import all_product from '../componants/assets/all_product'
import { Item } from '../componants/items/Item'
import mens_banner from '../componants/assets/banner_mens.png'
import womens_banner from '../componants/assets/banner_women.png'
import kids_banner from '../componants/assets/banner_kids.png'
import breadcrum_arrow from '../componants/assets/breadcrum_arrow.png'
// import { useContext } from 'react'
// import { ShopContext } from '../componants/context/ShopContext'

export const ShopCategory = (props) => {
// const {all_product} = useContext(ShopContext)
  return (
    <>
    <div>
      <div>
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
      <div className='flex justify-between'>
      <div> <span className='font-bold'>Showing 1-12</span> out of 36 products </div>
      <div>
       <button>sort by </button><img className='inline' src={breadcrum_arrow} alt="sorting image" />
       </div> 
      </div>
      <div className='grid grid-cols-4 gap-2 ms-5' >
      {
        all_product.map((item, index) => {
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

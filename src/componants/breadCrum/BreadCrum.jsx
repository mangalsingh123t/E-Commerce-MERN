/* eslint-disable react/prop-types */

import arrow_icon from "../assets/breadcrum_arrow.png"
export default function BreadCrum(props) {

  const { product } = props

  return (
    <>
   <div className="flex flex-wrap items-center space-x-1 text-sm md:text-base">
    <span className="truncate">Home</span>
    <img src={arrow_icon} alt="arrow-icon" className="w-4 h-4"  />
    <span className="truncate">Shop</span>
    <img src={arrow_icon} alt="arrow-icon" className="w-4 h-4" />
    <span className="truncate">{product.category}</span>
    <img src={arrow_icon} alt="arrow-icon" className="w-4 h-4" />
    <span className="truncate">{product.name}</span>
    <img src={arrow_icon} alt="arrow-icon" className="w-4 h-4" />
</div>

    </>
  )
}

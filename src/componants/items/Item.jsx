/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const Item = (props) => {
  return (
    <>
      <div className="transition-transform duration-200 ease-in-out hover:scale-105 p-3 rounded-lg">
        {/* Product Image */}
        <Link to={`/product/${props.id}`}>
          <img
            onClick={window.scrollTo(0, 0)}
            src={props.image}
            alt="product_image"
          />
        </Link>
        
        {/* Product Name */}
        <p className="text-xs pt-[6px]">{props.name}</p>
        
        {/* Product Price */}
        <p>
          <span className="px-1">${props.new_price}</span>
          <span className="px-1 line-through text-slate-400">${props.old_price}</span>
        </p>
      </div>
    </>
  )
}

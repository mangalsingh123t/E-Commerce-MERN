/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
export const Item = (props) => {
  return (
    <>
      <div >
        <Link to={`/product/${props.id}`}>  <img onClick={window.scrollTo(0,0)} src={props.image} alt="prooduct_image" /> </Link>
        <p className="text-xs pt-[6px]">{props.name}</p>
        <p><span className="px-1">${props.new_price}</span><span className="px-1 line-through text-slate-400">${props.old_price}</span></p>
      </div>
    </>
  )
}

/* eslint-disable react/prop-types */

export const Item = (props) => {
  return (
    <>
    <div className="w-[300px]">
     <img src={props.image} alt="prooduct_image" />
     <p className="text-xs pt-[6px]">{props.name}</p>
     <p><span className="px-1">${props.new_price}</span><span className="px-1 line-through text-slate-400">${props.old_price}</span></p>
    </div>
    </>
  )
}

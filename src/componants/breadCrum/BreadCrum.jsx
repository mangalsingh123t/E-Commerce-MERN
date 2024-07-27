/* eslint-disable react/prop-types */
 
 import arrow_icon from "../assets/breadcrum_arrow.png"
 export default function BreadCrum(props) {
       
  const{product} = props

   return (
     <>
       <div className="flex">
        Home <img src={arrow_icon} alt="arrow-icon" />  Shop  <img src={arrow_icon} alt="arrow-icon" /> {product.category} <img src={arrow_icon} alt="arrow-icon" /> {product.name}   <img src={arrow_icon} alt="arrow-icon" />
       </div>
     </>
   )
 }
 